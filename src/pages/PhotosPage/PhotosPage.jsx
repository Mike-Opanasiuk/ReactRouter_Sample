import { useEffect, useState } from "react"
import { PhotoCard } from "../../components/PhotoCard/PhotoCard";

export const PhotosPage = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
            .then(response => response.json())
            .then(json => setPhotos(json));
    }, []);

    if (photos.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-3">
            <div className="row">
                {photos.map((ph) => {
                    return (
                        <PhotoCard key={ph.id} photoInfo={ph}></PhotoCard>
                    )
                })}
            </div>
        </div>
    )
}