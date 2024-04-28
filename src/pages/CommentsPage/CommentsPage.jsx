import axios from "axios";
import { useEffect, useState } from "react"
import { CommentCard } from "../../components/CommentCard/CommentCard";

export const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10")
            .then((resp) => setComments(resp.data));
    }, []);

    if (comments.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <div className="row">
                {comments.map((comment) => {
                    return (
                        <CommentCard key={comment.id} comment={comment}>

                        </CommentCard>
                    );
                })}
            </div>
        </div>
    )
}