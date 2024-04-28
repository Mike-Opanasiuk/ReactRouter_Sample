export const CommentCard = ({comment}) => {
    
    const {id, name, email, body} = comment;

    return (
        <div className="col-3">
            <div className="card mb-3">
                <h3 className="card-header">{name}</h3>
                <div className="card-body">
                    <h5 className="card-title">Id: {id}</h5>
                    <h6 className="card-subtitle text-muted">Email: {email}</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{body}</li>
                </ul>
            </div>
        </div>
    )
}