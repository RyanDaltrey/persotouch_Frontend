import axios from "axios";

class panierService {
    static getAllPaniers(){
        return axios.get("http://127.0.0.1:3000/paniers");
    }
}
export default panierService;