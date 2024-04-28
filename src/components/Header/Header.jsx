import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="mt-3" style={{ "height": "50px", "flexShrink": "0" }}>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/photos">Photos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/comments">Comments</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}