import { useEffect, useState } from "react";
import produitsService from "../Services/produitsService";

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

    
    </>
}