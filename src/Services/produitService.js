import axios from "axios";

class produitService {
    static getAllProduits(){
        return axios.get("http://127.0.0.1:3000/produits");
    }

    static getProduitById(id){
        return axios.get("http://127.0.0.1:3000/produits/" + id);
    }
}
export default produitService;