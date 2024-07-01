import { useEffect, useState } from "react";
import produitsService from "../Services/produitsService";
import CardProduits from "../Components/Produits";
import NavBar from "../Components/NavBar";

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

    {produits.map((produits, index) => (
        <CardProduits produits={produits} key={index} />
    ))}

    </>
}
export default Accueil;