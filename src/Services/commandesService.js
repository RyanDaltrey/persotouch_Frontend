import axios from "axios";

class commandesServices {
    static getAllCommandes(){
        return axios.get("http://127.0.0.1:3000/commandes");
    }
}
export default commandesServices;