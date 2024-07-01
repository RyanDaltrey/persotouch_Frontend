import { useEffect, useState } from "react";
import produitsService from "../Services/produitsService";
import NavBar from "../Components/NavBar";
import CardProduits from "../Components/produits";
import Footer from "../Components/Footer";

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

    useEffect(() => {
        fetchProduits();
    }, [])

    return <>
    <NavBar/>
    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
    {produits.map((produits, index) => (
        <CardProduits produits={produits} key={index} />
    ))}
    </div>
    <Footer/>
    </>
}
export default Accueil;