import MainLayout from "@layouts/farmer/MainLayout";
import { FARMER_ROUTE_TYPES} from "../routeTypes/routeTypes";
import Profile from "@pages/farmer/Account/Profile";
import Orders from "@pages/farmer/Orders";
import Product from "@pages/farmer/Product";

export default [
    {
        path: "/@farmer/profile",
        Page: Profile,
        Layout: MainLayout,
        type: FARMER_ROUTE_TYPES.PRIVATE,
        title: "Trang chủ trang trại",
    },
    {
        path: "/@farmer/orders/:page",
        Page: Orders,
        Layout: MainLayout,
        type: FARMER_ROUTE_TYPES.PRIVATE,
        title: "Đơn hàng",
    },
    {
        path: "/@farmer/product/:page",
        Page: Product,
        Layout: MainLayout,
        type: FARMER_ROUTE_TYPES.PRIVATE,
        title: "Sản phẩm",
    },
];