import MaintLayout from "@layouts/user/MainLayout";
import NavBar from "@layouts/farmer/MainLayout/Navbar";

const MainLayout = ({ children }) => {
    return (
        <MaintLayout>
            <div className="flex flex-row justify-between gap-4">
                <NavBar></NavBar>
                <div className="flex-1">{children}</div>
            </div>
        </MaintLayout>
    );
}

export default MainLayout;