import produitsService from '../Services/produitsService';
import instance from '../API/axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const DetailsPage = () => {
    const {id} = useParams()
    const [produits, setProduits] = useState({});


    const fetchProduit = async () =>{
        try {
           const responseCard = await produitsService.getProduitById(id);
           setProduits(responseCard.data);
           console.log(responseCard.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduit();
    }, [])


    return <>
        <div>
        <img src="{produits.img_cat" alt="image_produits_details" className="image_produits_details"/>
        </div>
        <div>
            <h2>{produits.nom_pro}</h2>
            <p>{produits.des_pro}</p>
            <p>{produits.prix}</p>
        </div>
        <div>
            <button>Ajouter au panier</button>
        </div>
    </>
}

export default DetailsPage;