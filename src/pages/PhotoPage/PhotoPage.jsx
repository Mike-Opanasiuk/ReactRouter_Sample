import { useLoaderData } from "react-router-dom";

export const PhotoPage = () => {

    const photoInfo = useLoaderData();
    const { albumId, id, title, url, thumbnailUrl } = photoInfo;

    return (
        
        <div>
            <h1>{title}</h1>
            <hr></hr>
            <h3>Id: {id}</h3>
            <h3>Album Id: {albumId}</h3>
            <h3>Url: {url}</h3>
            <h3>Thumbnail Url: {thumbnailUrl}</h3>
        </div>
    );
}