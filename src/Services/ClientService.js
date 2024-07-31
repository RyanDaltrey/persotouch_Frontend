import axios from "axios";

class clientService {
    static getAllClients(){
        return axios.get("http://127.0.0.1:3000/clients");
    }
}
export default clientService;