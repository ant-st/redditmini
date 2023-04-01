import './header.css'

export const Header = () => {
    return (
        <header>
            <img src={require('./redditIcon.png')} alt="reddit icon" id="redditIcon"/>
            <h1> Reddit<span>mini</span></h1>
            <img src={require('./searchIcon.png')} alt="search icon" id="searchIcon"/>
            <input type="text"/>
        </header>
    )
}