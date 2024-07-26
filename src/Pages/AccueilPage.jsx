import { useEffect, useState } from "react";
import produitsService from "../Services/produitsService";
import NavBar from "../Components/NavBar";
import CardProduits from "../Components/Produits";
import Footer from "../Components/Footer";
import '../Styles/Accueil.css';

const Accueil = () => {
    const [produits, setProduits] = useState([]);

    const fetchProduits = async() => {
        try {
            const response = await produitsService.getAllProduits();
            setProduits(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    // handleClick = () => {
    //     const element = document.getElementById('buttonProduits')
    //     console.log(element)
    // }

    useEffect(() => {
        fetchProduits();
    }, [])

    return <>
    <NavBar/>
    <img src={require("../Assets/header_nouvelle_collection.png")} alt="image_accueil_nouvelle_collection" className="image_header_accueil"></img>
    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
    {produits.map((produits, index) => (
        <CardProduits produits={produits} key={index} />
    ))}
    {/* <button id="buttonProduits" onClick={() => this.handleClick()}>Test</button> */}
    </div>
    <Footer/>
    </>
}
export default Accueil;