import {Container} from "../Container/Container";
import './ContainerGallery.css'
import {selectContainers} from "../store";
import {useSelector} from "react-redux";
export const ContainersGallery = () => {
    const containers = useSelector(selectContainers);

    const getGalleryImg = (obj) => {
        let url = obj[Object.keys(obj)[0]].s.u;
        return url.replaceAll('amp;','');
    }

    return (
        <div id="containerGallery">
            {containers.map(element => {
                let data = {
                    name: element.data.name,
                    title: element.data.title,
                    selftext: element.data.selftext,
                    author: element.data.author,
                    vote: element.data.score,
                    timestamp: element.data.created,

                    url: element.data.url,
                    thumbnail: element.data.thumbnail,
                    isGallery: element.data['is_gallery'],

                    ...(element.data.preview && {imageUrl: element.data.preview.images[0].source.url.replaceAll('amp;','')}),
                    ...(element.data['is_gallery'] && {imageUrl: getGalleryImg(element.data['media_metadata']) })
                };
                return <Container data={data}/>;
            })
            }
        </div>
    )
}