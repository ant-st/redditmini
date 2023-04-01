import './Container.css'

export const Container = () => {
    return (
        <div className="container">
            <h2>Hello!</h2>
            <div className="voting">
                <img src={require('./upArrow.png')} alt="up arrow"/>
                <p>150</p>
                <img src={require('./downArrow.png')} alt="down arrow"/>
            </div>
            <img src={require('./novo.png')} className="redditPic" alt="content"/>
            <h3 className="caption">posted by Ziemniak <span>@</span> 12.12.2022</h3>
        </div>
    )
}