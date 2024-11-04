import MaintLayout from '@layouts/user/MainLayout'
import AuthLayout from '@layouts/user/AuthLayout'

import Home from '@pages/user/Home'
import Shop from '@pages/user/Shop'
import Search from '@pages/user/Search'
import Market from '@pages/user/Market'
import Forum from '@pages/user/Forum'
import Account from '@pages/user/Account'
import Cart from '@pages/user/Cart'
import Login from '@pages/user/auth/Login'

import { USER_ROUTE_TYPES } from '../routeTypes/routeTypes'

export default[
    {
        path: "/",
        Page: Home,
        Layout: MaintLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Trang chủ",
    },
    {
        path: "/home",
        Page: Home,
        Layout: MaintLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Trang chủ",
    },
    {
        path: "/shop",
        Page: Shop,
        Layout: MaintLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Mua sắm",
    },
    {
        path: "/market",
        Page: Market,
        Layout: MaintLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Thị trường",
    },
    {
        path: "/forum",
        Page: Forum,
        Layout: MaintLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Diễn đàn",
    },
    {
        path: "/cart",
        Page: Cart,
        Layout: MaintLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Giở hàng",
    },
    {
        path: "/account",
        Page: Account,
        Layout: MaintLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Tài khoản",
    },
    {
        path: "/login",
        Page: Login,
        Layout: AuthLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Đăng nhập",
    },
];