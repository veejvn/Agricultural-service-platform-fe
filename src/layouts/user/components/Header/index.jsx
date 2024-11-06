import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Header.scss"
import imgNoAvatar from "@assets/images/no-avatar.png"


function Header() {
    const isLoging = useSelector((state) => state.auth.isLoging);
    const user = useSelector((state) => state.auth.user);
    const avatar = user?.avatar || imgNoAvatar;

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
                        {!isLoging ?
                            <div>
                                <Link to="/login" className="mx-3 hover:underline hover:text-[#b7ea59] text-primary text-base">Đăng nhập</Link>
                                <Link to="/register" className="mx-3 hover:underline hover:text-[#b7ea59] text-primary text-base">Đăng ký</Link>
                            </div>
                            : <div className="flex my-4 mx-auto">
                                <button className="flex p-0 items-center justify-center font-normal size-11 mx-auto rounded-full border border-solid border-primary hover:bg-[#b8ef52] select-none btn-search">
                                    <FaSearch className="text-primary size-4" />
                                </button>
                                <div className="flex size-12 mx-4">
                                    <NavLink to="/cart" className="relative m-auto">
                                        <FaShoppingCart className="hover:text-[#679d06] text-primary size-8 hover:size-9 transition" />
                                        <span className="absolute rounded-full flex items-center justify-center text-black px-1 number-order bg-secondary">
                                            3
                                        </span>
                                    </NavLink>
                                </div>
                                {/* <FaUser className="icon text-primary size-8" /> */}
                                <div className="flex size-12">
                                    <NavLink to="/account" className="w-10 h-10 m-auto hover:size-12 transition">
                                        {avatar ?
                                            <img src={avatar} className="rounded-full"></img>
                                            : <img src={imgNoAvatar} className="rounded-full" />
                                        }
                                    </NavLink>
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