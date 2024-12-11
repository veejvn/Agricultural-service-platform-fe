import { useParams } from "react-router-dom";
import AllProduct from "./AllProduct";
import AddProduct from "./AddProduct";

const page = {
    all: AllProduct,
    add: AddProduct,
}

const Product = () => {
    const params = useParams();
    const Page = page[params.page] || AllProduct;
    return <Page></Page>;
}
export default Product;