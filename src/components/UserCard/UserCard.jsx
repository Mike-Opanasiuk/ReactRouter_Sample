import { Link } from "react-router-dom";

export const UserCard = ({ userInfo }) => {
    const { id, name, username, email } = userInfo;
    return (
        <div className="col-3 mb-4">
            <div className="card text-white bg-primary">
                <div className="card-header">{name}</div>
                <div className="card-body">
                    <h4 className="card-title">{username}</h4>
                    <p className="card-text">{email}</p>
                    <Link to={`/users/${id}`} className="btn btn-outline-light stretched-link">View more info</Link>
                </div>
            </div>
        </div>
    );
}