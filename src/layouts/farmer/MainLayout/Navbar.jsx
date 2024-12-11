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
        key: 'farmer',
        icon: <MdOutlineAccountCircle />,
        children: [
            {
                label: 'Hồ sơ',
                key: 'profile',
                path: "/@farmer/profile"
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
                path: "/@farmer/orders/all-order"
            }
        ],
    },
    {
        label: 'Quản lý sản phẩm',
        key: 'product',
        icon: <AiFillProduct />,
        children: [
            {
                label: 'Thêm sản phẩm',
                key: 'add',
                path: "/@farmer/product/add"
            },
            {
                label: 'Tất cả sản phẩm',
                key: 'all-product',
                path: "/@farmer/product/all-product"
            }
        ],
    },
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
            style={{ width: 270}}
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