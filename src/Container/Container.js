import './Container.css'

export const Container = (props) => {
    const data = props.data;
    const postDate = new Date(data.timestamp * 1000);

    return (
        <div className="container" key={data.name}>
            <h2>{data.title}</h2>
            <div className="voting">
                <img src={require('./upArrow.png')} alt="up arrow"/>
                <p>{data.vote}</p>
                <img src={require('./downArrow.png')} alt="down arrow"/>
            </div>
            {

                data.imageUrl ?
                    <img src={data.imageUrl} className="redditPic" alt="content"/>
                    :
                    data.isGallery ?
                        <img src={data.thumbnail} className="redditPic" alt="content"/>
                        :
                        data.selftext

            }
            <h3 className="caption">posted by {data.author} <span>@</span> {postDate.toLocaleString()}</h3>
        </div>
    )
}