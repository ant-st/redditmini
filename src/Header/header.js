import './header.css'
import {useDispatch, useSelector} from "react-redux";
import {handleSearchTerm, loadData, selectSearchTerm} from "../store";
import {useEffect, useState} from "react";

export const Header = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const [term, setTerm] = useState('');

    const handleTermChange = ({target}) => {
        setTerm(target.value);
    }

    const handleKey = (event) => {
        if (event.key === 'Enter') handleSearch();
    }

    const handleSearch = () => {
        dispatch(handleSearchTerm(term));
    }

    useEffect(() => {
        dispatch(loadData(searchTerm));
        // eslint-disable-next-line
    }, [searchTerm]);

    return (
        <header>
            <img src={require('./redditIcon.png')} alt="reddit icon" id="redditIcon"/>
            <h1> Reddit<span>mini</span></h1>
            <img src={require('./searchIcon.png')} alt="search icon" id="searchIcon" onClick={handleSearch} />
            <input type="text" onInput={handleTermChange} onKeyDown={handleKey}/>
        </header>
    )
}