import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";


export const Layout = () => {
    return (
        <div className="container d-flex flex-column" style={{ "height": "100vh" }}>

            <Header></Header>

            <main className="flex-fill mt-3 mb-3">
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </div>
    );
}