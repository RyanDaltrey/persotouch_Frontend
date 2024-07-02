import { useState } from "react";
import instance from "../API/axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const ConnexionPage = () =>{

    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const navigate = useNavigate()

    const login = () => {
      instance.post('/auth/login' , {
        email : email,
        mdp : mdp
      })
      .then(function(response){
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch(function(error){
        console.log(error);
      })
    }


return <>
    <NavBar/>
    <div>
        <input type="email" name="email" defaultValue={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="email" />
        <input type="password" name="mdp" defaultValue={mdp} onChange={(e) => {setMdp(e.target.value)}} placeholder="mot de passe"/>
        <boutton onClick={() => {login()}}>Connexion</boutton>
    </div>
    <Footer/>
    </>

}
export default ConnexionPage;