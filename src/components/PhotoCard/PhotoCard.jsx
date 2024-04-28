import { Link } from "react-router-dom";

export const PhotoCard = ({photoInfo}) => {
    const { albumId, id, title, url, thumbnailUrl } = photoInfo;

    return (
        <div className="col-3">
            <div className="card mb-3">
                <h3 className="card-header">{title}</h3>
                <img src={url} alt="Image not found" width="100%" height="200" className="d-block user-select-none" />

                <div className="card-body">
                    <h5 className="card-title">Album Id: {albumId}</h5>
                    <h6 className="card-subtitle text-muted">Id: {id}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Thumbnail Url: {thumbnailUrl}</li>
                </ul>
                <div className="card-footer text-muted">
                    Image Url: {url}
                </div>
                <Link to={`/photos/${id}`} className="btn btn-outline-dark stretched-link">View more info</Link>
            </div>
        </div>
    );
}