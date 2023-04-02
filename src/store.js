import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loadData = createAsyncThunk("reddit/loadData", async (query) => {
    console.log('fetching started: ' + query);
    query = query.replaceAll(' ','%20');
    return fetch('https://www.reddit.com/search.json?q=' + query).then(response => response.json());
})

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        containers: [ ],
        searchTerm: 'hello world',
        isLoading: false,
        hasError: false
    },
    reducers: {
        handleSearchTerm: (state, action) => {
            if (action.payload.trim()) {
                return {...state, searchTerm: action.payload.trim()};
            }
        },
    },
    extraReducers: {
        [loadData.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadData.fulfilled]: (state,action) => {
            state.containers = action.payload.data.children;
            state.isLoading = false;
        },
        [loadData.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
});

export const {
    handleSearchTerm,
} = redditSlice.actions;

export const selectContainers = state => state.containers;
export const selectSearchTerm = state => state.searchTerm;

export default configureStore({
    reducer: redditSlice.reducer
});