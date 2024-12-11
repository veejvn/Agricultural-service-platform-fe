import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MainLayout.scss"


const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main className="container mx-auto px-3 py-12 mb-12 mt-40">
                <div>{children}</div>
            </main>
        </Fragment>
    );
}

export default MainLayout;