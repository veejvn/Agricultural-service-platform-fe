import userRoutes from "./routes/route.user"

const allRoutes = [...userRoutes];

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