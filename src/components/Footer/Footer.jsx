import { useState } from "react";

export const Footer = () => {
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className="mt-3" style={{ "height": "50px", "flexShrink": "0" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3 text-center">
                        © {year} React Routing. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}