import { useParams } from "react-router-dom";
import AllOrder from "./AllOrder";

const page = {
    all: AllOrder
}

const Orders = () => {
    const params = useParams();
    const Page = page[params.page] || AllOrder;
    return <Page></Page>;
}
export default Orders;