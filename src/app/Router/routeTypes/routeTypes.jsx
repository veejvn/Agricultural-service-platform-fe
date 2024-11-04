import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

import UserMainLayout from "@layouts/user/MainLayout"

import { ROLES } from "@configs/const.config"

const USER_ROUTE_TYPES = {
    PUBLIC: PublicRoute,
    PRIVATE: ({ children }) => (
        <PrivateRoute AccessDeniedLayout={UserMainLayout} role={ROLES.CONSUMER}>
            {children}
        </PrivateRoute>
    ),
}

export { USER_ROUTE_TYPES }