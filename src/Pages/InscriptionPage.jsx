import instance from "../API/axios";
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
            navigate.apply("/connexion");
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    return <>
        <div>
            <button onClick={() => {register()}}>Inscription</button>
            <input type="text" name="prenom" defaultValue={prenom} placeholder="prenom" onChange={(e) => {setPrenom(e.target.value)}}/>
            <input type="text" name="nom" defaultValue={nom} placeholder="nom" onChange={(e) => {setNom(e.target.value)}}/>
            <input type="email" name="email" defaultValue={email} placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" name="mot de passe" defaultValue={mdp} placeholder="mot de passe" onChange={(e) => {setMdp(e.target.value)}}/>
            <input type="text" name="adresse" defaultValue={adresse} placeholder="adresse" onChange={(e) => {setAdresse(e.target.value)}}/>
            <input type="text" name="ville" defaultValue={ville} placeholder="ville" onChange={(e) => {setVille(e.target.value)}}/>
            <input type="text" name="code_postal" defaultValue={code_postal} placeholder="CP" onChange={(e) => {setCode_Postal(e.target.value)}}/>
            <input type="text" name="pays" defaultValue={pays} placeholder="pays" onChange={(e) => {setPays(e.target.value)}}/>
        </div>
    </>
}
export default InscriptionPage;