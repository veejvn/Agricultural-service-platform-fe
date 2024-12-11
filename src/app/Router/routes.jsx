import userRoutes from "./routes/route.user"
import farmerRoutes from "./routes/route.farmer"

const allRoutes = [...userRoutes, ...farmerRoutes];

export default allRoutes.map((route) => {
    const { Layout, Page, title } = route;
    return {
        path: route.path,
        type: route.type,
        title: title,
        element: (
            <Layout>
                <Page/>
            </Layout>
        ),
    };
});