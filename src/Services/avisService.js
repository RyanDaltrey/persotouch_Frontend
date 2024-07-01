import axios from "axios";

class AvisService {
    static getAllAvis() {
        return axios.get("http://127.0.0.1:3000/avis");
    }
}
export default AvisService;

