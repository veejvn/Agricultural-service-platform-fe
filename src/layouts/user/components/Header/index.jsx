import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Header.scss"
import Avatar from "./components/Avatar";

const Header = () => {
    const isLoging = useSelector((state) => state.auth.isLoging);

    return (
        <header className="container mx-auto px-3 fixed inset-x-0 top-0 bg-white header">
            <div className="container block p-6 topbar bg-primary"></div>
            <div className="container px-0 border-b border-gray-300">
                <nav className="h-24 flex-wrap justify-start relative flex items-center py-2">
                    <NavLink to="/" className="py-1.5 mr-4 text-2xl whitespace-nowrap">
                        <h1 className="logo h-12 text-4xl font-extrabold text-primary">Nông nghiệp xanh</h1>
                    </NavLink>
                    <div className="h-20 flex basis-auto grow items-center bg-white">
                        <div className="flex-row mx-auto flex pl-0 mb-0 list-none">
                            <NavLink to="/" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Trang chủ</NavLink>
                            <NavLink to="/shop" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Sản phẩm</NavLink>
                            <NavLink to="/market" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Thị trường</NavLink>
                            <NavLink to="/forum" className={({ isActive }) => isActive ? "py-2.5 px-4 text-base nav-link hover:text-primary text-primary" : "py-2.5 px-4 text-base nav-link hover:text-primary"}>Diễn đàn</NavLink>
                        </div>
                        {!isLoging ?
                            <div>
                                <Link to="/login" className="mx-3 hover:underline hover:text-[#b7ea59] text-primary text-base">Đăng nhập</Link>
                                <Link to="/register" className="mx-3 hover:underline hover:text-[#b7ea59] text-primary text-base">Đăng ký</Link>
                            </div>
                            : <div className="flex my-4 mx-auto">
                                <div className="flex size-12">
                                    <button className="flex items-center justify-center size-10 hover:size-12 m-auto font-normal rounded-full border border-solid border-primary select-none">
                                        <FaSearch className="text-primary size-2/5" />
                                    </button>
                                </div>
                                <div className="flex size-12 mx-4">
                                    <NavLink to="/cart" className="relative m-auto">
                                        <FaShoppingCart className="hover:text-[#679d06] text-primary size-8 hover:size-9 transition" />
                                        {/* <span className="absolute rounded-full flex items-center justify-center text-black px-1 number-order bg-secondary">
                                            3
                                        </span> */}
                                    </NavLink>
                                </div>
                                <div className="flex size-12">
                                    <div className="size-10 m-auto hover:size-12 transition">
                                        <Avatar />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;