import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export const UserPage = () => {
    const { userId } = useParams();
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
            .then(response => response.json())
            .then(data => {
                setUser(data[0]); 
            });
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name} ({user.username})</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">
                        Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                    </p>
                    <p className="card-text">Phone: {user.phone}</p>
                    <p className="card-text">Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                    <p className="card-text">Company: {user.company.name}</p>
                    <p className="card-text">Catchphrase: {user.company.catchPhrase}</p>
                </div>
            </div>
        </div>
    );
}
