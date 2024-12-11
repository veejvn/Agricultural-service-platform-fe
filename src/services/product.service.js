import { getApiUrl } from "@tools/url.tool";
import axios, { service } from "@tools/axios.tool";

const ProductService = {
    getAllProduct({page = 0, size = 2}){
        return service(axios.get(getApiUrl(`/products?page=${page}&size=${size}`)));
    },
    createProduct({name, description, price, inventory, thumbnail, categoryId}){
        return service(axios.post(getApiUrl("/products"), {name, description, price, inventory, thumbnail, categoryId}));
    },
    getAllProductByFarmer(){
        return service(axios.get(getApiUrl("/products/farmer")), true);
    },
    updateProduct({id, name, description, price, inventory, thumbnail, categoryId}){
        return service(axios.put(getApiUrl(`/products/${id}`), {name, description, price, inventory, thumbnail, categoryId}));
    },
    deleteProduct(productId){
        return service(axios.delete(getApiUrl(`/products/${productId}`)));
    }
}

export default ProductService;