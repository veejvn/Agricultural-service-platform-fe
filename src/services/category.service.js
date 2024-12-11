import axios, { service } from "@tools/axios.tool";
import { getApiUrl } from "@tools/url.tool";

const CategoryService = {
    getAll(){
        return service(axios.get(getApiUrl("/categories")), true);
    }
}

export default CategoryService;