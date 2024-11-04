import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.scss"

function Header() {
    return (
        <header className="container mx-auto px-3 fixed inset-x-0 top-0 header">
            <div className="container block p-6 topbar bg-primary"></div>
            <div className="container px-0">
                <nav className="h-24 flex-wrap justify-start relative flex items-center py-2">
                    <NavLink to="/" className="py-1.5 mr-4 text-2xl whitespace-nowrap">
                        <h1 className="logo h-12 text-4xl font-extrabold text-primary">Nông nghiệp xanh</h1>
                    </NavLink>
                    <div className="h-20 flex basis-auto grow items-center">
                        <div className="flex-row mx-auto flex pl-0 mb-0 list-none">
                            <NavLink to="/" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Trang chủ</NavLink>
                            <NavLink to="/shop" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Mua sắm</NavLink>
                            <NavLink to="/market" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Thị trường</NavLink>
                            <NavLink to="/forum" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Diễn đàn</NavLink>
                        </div>
                        <div className="flex m-4 me-0">
                            <button className="flex p-0 items-center justify-center font-normal w-11 h-11 rounded-full mr-6 border border-solid border-orange-400 hover:bg-orange-300 select-none btn-search">
                                <FaSearch className="icon text-primary size-4"/>
                            </button>
                            <NavLink to="/cart" className="relative me-6 my-auto">
                                <FaShoppingCart className="icon text-primary size-8" />
                                <span className="absolute rounded-full flex items-center justify-center text-black px-1 number-order bg-secondary">
                                    3
                                </span>
                            </NavLink>
                            <NavLink to="/account" className="my-auto">
                                <FaUser className="icon text-primary size-8"/>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;