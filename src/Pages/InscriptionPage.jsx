import instance from "../API/axios";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import '../Styles/Inscription.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const { useState } = require("react");
const { useNavigate } = require("react-router-dom")

const InscriptionPage = () =>{

    const navigate = useNavigate();
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [adresse, setAdresse] = useState("");
    const [ville, setVille] = useState("");
    const [code_postal, setCode_Postal] = useState("");
    const [pays, setPays] = useState("");

    const register = () => {
        instance.post('/auth/register', {
            prenom_client : prenom,
            nom_client : nom,
            email : email,
            mdp : mdp,
            adresse : adresse,
            ville : ville,
            code_postal : code_postal,
            pays : pays,
        })
        .then(function(response){
            console.log(response.data.message);
            navigate("/connexion");
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    return <>
        <NavBar/>
        <div className="titre_page_inscription">
            <h3>Créer un compte!</h3>
        </div>
        <div className="texte_accroche_page_inscription">
            <p className="texte_inscription">Le compte PersoTouch vous permet de gagner du temps au moment du paiement, d'accéder à votre panier à partir de n'importe quel appareil et de consulter l'historique de vos commandes.</p>
        </div>
        <div className="deja_un_compte">
            <a href="/connexion"><p>Vous avez deja un compte? Vous connecter </p></a><ArrowForwardIosOutlinedIcon/>
            <img src={require("../Assets/instagram_post_bijoux.png")} alt="" className="image_inscription"></img>
        </div>

        <div className="block_inscription">
            <input type="text" name="prenom" defaultValue={prenom} placeholder="prenom" onChange={(e) => {setPrenom(e.target.value)}}className="input_inscription" />
            <input type="text" name="nom" defaultValue={nom} placeholder="nom" onChange={(e) => {setNom(e.target.value)}} className="input_inscription"/>
            <input type="email" name="email" defaultValue={email} placeholder="email" onChange={(e) => {setEmail(e.target.value)}} className="input_inscription"/>
            <input type="password" name="mot de passe" defaultValue={mdp} placeholder="mot de passe" onChange={(e) => {setMdp(e.target.value)}} className="input_inscription"/>
            <input type="text" name="adresse" defaultValue={adresse} placeholder="adresse" onChange={(e) => {setAdresse(e.target.value)}} className="input_inscription"/>
            <input type="text" name="ville" defaultValue={ville} placeholder="ville" onChange={(e) => {setVille(e.target.value)}} className="input_inscription"/>
            <input type="text" name="code_postal" defaultValue={code_postal} placeholder="CP" onChange={(e) => {setCode_Postal(e.target.value)}} className="input_inscription"/>
            <input type="text" name="pays" defaultValue={pays} placeholder="pays" onChange={(e) => {setPays(e.target.value)}}className="input_inscription"/>
            <button onClick={() => {register()}} className="boutton_inscription">Créer un compte</button>
        </div>
        <Footer/>
    </>
}
export default InscriptionPage;