import Tippy from "@tippyjs/react/headless";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingBag, FaSignOutAlt, FaUser } from "react-icons/fa";
import { PiFarmLight } from "react-icons/pi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import imgNoAvatar from "@assets/images/no-avatar.png"
import { ROLES } from "@configs/const.config";

const Avatar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const avatar = user?.avatar || imgNoAvatar;
    const tippyRef = useRef(null);
    const isAdmin = user?.roles?.includes(ROLES.ADMIN);
    const isFarmer = user?.roles?.includes(ROLES.FARMER);

    const menuItems = [
        { label: "Tài khoản", Icon: FaUser, path: "/account/profile" },
        { label: "Đơn hàng", Icon: FaShoppingBag, path: "/orders/all" },
        isFarmer ? {
            label: "Trang trại", Icon: PiFarmLight, path: "/@farmer/profile"
        } : {
            label: "Đăng ký trang trại", Icon: PiFarmLight, path: "/upgrade-to-farmer"
        },
        { label: "Đăng xuất", Icon: FaSignOutAlt, path: "/logout" },
    ];

    const hanldeShowMenu = () => {
        setIsOpenMenu(true);
    }

    const handleClickMenuItems = () => {
        setIsOpenMenu(false);
    }

    return (
        <Tippy
            interactive={true}
            visible={isOpenMenu}
            placement="bottom-end"
            fallbackPlacements={["top-end"]}
            onClickOutside={() => setIsOpenMenu(false)}
            ref={tippyRef}
            render={(attrs) => (
                <div
                    className="bg-white shadow-lg hover:shadow-xl rounded-md p-2 flex flex-col tooltip-scroll "
                    tabIndex={-1}
                    {...attrs}
                >
                    <div className="flex items-center p-2 border-b">
                        <img src={avatar} className="size-10 rounded-full mr-2" alt="Avatar" />
                        <div>
                            <div className="font-semibold">{user?.displayName}</div>
                            <div className="text-gray-500">{user?.email}</div>
                        </div>
                    </div>
                    {menuItems.map((item) => {
                        const { Icon } = item;
                        return (
                            <Link
                                key={v4()}
                                className="flex items-center w-full p-2 text-left hover:bg-gray-100 hover:text-primary"
                                onClick={() => handleClickMenuItems()}
                                to={item?.path}
                            >
                                {item.Icon && (
                                    <span className="mr-2">
                                        <Icon />
                                    </span>
                                )}
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        >
            <span onClick={hanldeShowMenu} className="cursor-pointer">
                <img src={avatar} className="rounded-full size-full" alt="Avatar" />
            </span>
        </Tippy>
    );
}

export default Avatar;