import { MdOutlineAccountCircle } from "react-icons/md";
import { RiBillLine, RiShoppingCartLine } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Menu } from 'antd';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const items = [
    {
        label: 'Thông tin trang trại',
        key: 'account',
        icon: <MdOutlineAccountCircle />,
        children: [
            {
                label: 'Hồ sơ',
                key: 'profile',
                path: "/account/profile"
            },
            {
                label: 'Địa chỉ',
                key: 'address',
                path: "/account/address"
            },
            {
                label: 'Đổi mật khẩu',
                key: 'change-password',
                path: "/account/change-password"
            },
        ],
    },
    {
        label: 'Đơn hàng',
        key: 'order',
        icon: <RiBillLine />,
        children: [
            {
                label: 'Tất cả',
                key: 'all-order',
                path: "/orders/all"
            }
        ],
    }
];
const NavBar = () => {
    const [current, setCurrent] = useState('profile'); // Đặt giá trị mặc định
    const { page } = useParams();

    useEffect(() => {
        setCurrent(page || 'profile'); // Nếu page không có, mặc định là 'profile'
    }, [page]);

    return (
        <Menu
            selectedKeys={[current]}
            mode="inline"
            style={{ width: 250}}
            className="text-primary bg-gray-100 rounded"
        >
            {items.map(item => (
                <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
                    {item.children.map(child => (
                        <Menu.Item key={child.key}>
                            <Link to={child.path}>
                                {child.label}
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu.SubMenu>
            ))}
        </Menu>
    );
}
export default NavBar;