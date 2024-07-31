import { useEffect, useState } from "react";
import produitService from "../Services/produitService";
import NavBar from "../Components/NavBar";
import CardProduit from "../Components/produits";
import Footer from "../Components/Footer";
import '../Styles/Accueil.css';

const Accueil = () => {
    const [produits, setProduits] = useState([]);

    const fetchProduits = async() => {
        try {
            const response = await produitService.getAllProduits();
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
    {produits.map((produit, index) => (
        <CardProduit produits ={produit} key={index} />
    ))}
    {/* <button id="buttonProduits" onClick={() => this.handleClick()}>Test</button> */}
    </div>
    <Footer/>
    </>
}
export default Accueil;