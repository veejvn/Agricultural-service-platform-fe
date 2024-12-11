import { Fragment } from 'react'

import MainLayout from '@layouts/user/MainLayout'
import AuthLayout from '@layouts/user/AuthLayout'
import { USER_ROUTE_TYPES } from '../routeTypes/routeTypes'

import Home from '@pages/user/Home'
import Product from '@pages/user/Product'
import Market from '@pages/user/Market'
import Forum from '@pages/user/Forum'
import Account from '@pages/user/Account'
import Cart from '@pages/user/Cart'
import Login from '@pages/user/auth/Login'
import Logout from '@pages/user/auth/Logout'
import Register from '@pages/user/auth/Register'
import ReceiveTokens from '@pages/user/auth/ReceiveTokens'
import ForgotPassword from '@pages/user/auth/ForgotPassword'
import AccountLayout from '@layouts/user/AccountLayout'
import NotFound from '@pages/user/NotFound'
import Orders from '@pages/user/Orders'

export default [
    {
        path: "/",
        Page: Home,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Trang chủ",
    },
    {
        path: "/home",
        Page: Home,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Trang chủ",
    },
    {
        path: "/register",
        Page: Register,
        Layout: AuthLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Đăng kí",
    },
    {
        path: "/auth/receive-tokens",
        Page: ReceiveTokens,
        Layout: Fragment,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Nhận tokens",
    },
    {
        path: "/login",
        Page: Login,
        Layout: AuthLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Đăng nhập",
    },
    {
        path: "/logout",
        Page: Logout,
        Layout: Fragment,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Đăng xuất",
    },
    {
        path: "/forgot-password",
        Page: ForgotPassword,
        Layout: AuthLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Quên mật khẩu",
    },
    {
        path: "/shop",
        Page: Product,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Sản phẩm",
    },
    {
        path: "/market",
        Page: Market,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Thị trường",
    },
    {
        path: "/forum",
        Page: Forum,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Diễn đàn",
    },
    {
        path: "/cart",
        Page: Cart,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PRIVATE,
        title: "Giỏ hàng",
    },
    {
        path: "/account/:page",
        Page: Account,
        Layout: AccountLayout,
        type: USER_ROUTE_TYPES.PRIVATE,
        title: "Tài khoản",
    },
    {
        path: "/orders/:page",
        Page: Orders,
        Layout: AccountLayout,
        type: USER_ROUTE_TYPES.PRIVATE,
        title: "Đơn hàng",
    },
    {
        path: "/404",
        Page: NotFound,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Không tìm thấy trang",
    },
    {
        path: "*",
        Page: NotFound,
        Layout: MainLayout,
        type: USER_ROUTE_TYPES.PUBLIC,
        title: "Không tìm thấy trang",
    },
];