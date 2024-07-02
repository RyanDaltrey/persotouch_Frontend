import axios from "axios";

class produitsService {
    static getAllProduits(){
        return axios.get("http://127.0.0.1:3000/produits");
    }

    static getProduitById(id){
        return axios.get("http://127.0.0.1:3000/produits/" + id);
    }
}
export default produitsService;