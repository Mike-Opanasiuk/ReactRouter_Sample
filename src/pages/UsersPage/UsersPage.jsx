import { useEffect, useState } from "react"
import { UserCard } from "../../components/UserCard/UserCard"

export const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => setUsers(json));
    }, []);

    if (users.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-3">
            <div className="row">
                {
                    users.map((u) => {
                        return (
                            <UserCard key={u.id} userInfo={u}></UserCard>
                        );
                    })
                }
            </div>
        </div>
    )
}

