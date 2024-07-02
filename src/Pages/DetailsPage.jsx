import produitsService from '../Services/produitsService';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';


const DetailsPage = () => {
    const {id} = useParams()
    const [produits, setProduits] = useState({});


    const fetchProduitById = async () =>{
        try {
           const responseCard = await produitsService.getProduitById(id);
           setProduits(responseCard.data);
           console.log(responseCard.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchProduitById();
    }, [])


    return <>
    <NavBar/>
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
    <Footer/>    
    </>
}

export default DetailsPage;