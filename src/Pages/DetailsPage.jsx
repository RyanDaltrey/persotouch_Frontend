import ProduitsService from "../Services/produitsService";
import instance from '../API/axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const DetailsPage = () => {
    const {id} = useParams()
    const [produits, setProduits] = useState({});


    const fetchProduit = async () =>{
        try {
           const responseCard = await ProduitsService.getProduitById(id);
           setProduits(responseCard.data);
           console.log(responseCard.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduit();
    }, [])
}