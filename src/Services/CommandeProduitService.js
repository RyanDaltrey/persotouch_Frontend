import axios from "axios";

class commandeProduitService {
    static getAllCommandeProduits(){
        return axios.get("http:127.0.0.1:3000/commande_produits");
    }
}
export default commandeProduitService;