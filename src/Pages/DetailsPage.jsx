import produitService from '../Services/produitService';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import '../Styles/DetailsPage.css';


const DetailsPage = () => {
    const {id} = useParams()
    const [produit, setProduit] = useState({});


    const fetchProduitById = async () =>{
        try {
           const responseCard = await produitService.getProduitById(id);
           setProduit(responseCard.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchProduitById();
    }, [])


    return <>
    <NavBar/>
    <div className='block_infos_produits'>
        <div className='image_page_details'>
            <img src={produit.img_cat}alt="image_produits_details" className="image_produits_details"/>
        </div>
        <div className='content_infos_produits'>
            <h2>{produit.nom_pro}</h2>
            <p>{produit.des_pro}</p>
            <div className='prix_boutton'>
            <p>{produit.prix}.00€</p>
            <button className='boutton_ajout_panier'>Ajouter au panier</button> 
            </div>
        </div>
    </div>
    <Footer/>    
    </>
}

export default DetailsPage;