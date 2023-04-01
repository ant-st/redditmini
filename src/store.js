import { configureStore, createSlice } from "@reduxjs/toolkit";

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        sets: [ ],
        searchTerm: 'hello'
    },
    reducers: {
        handleSearchTerm: (state, action) => {
            if (action.payload.trim()) {
                return {...state, searchTerm: action.payload.trim()};
            }
        }
    }
});

export const {
    handleSearchTerm
} = redditSlice.actions;

export default configureStore({
    reducer: redditSlice.reducer
});