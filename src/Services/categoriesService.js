import axios from "axios";

class categoriesService {
    static getAllService(){
        return axios.get("http://127.0.0.1:3000/categories");
    }
}
export default categoriesService;