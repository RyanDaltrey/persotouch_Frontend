import produitsService from '../Services/produitsService';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import '../Styles/DetailsPage.css';


const DetailsPage = () => {
    const {id} = useParams()
    const [produits, setProduits] = useState({});


    const fetchProduitById = async () =>{
        try {
           const responseCard = await produitsService.getProduitById(id);
           setProduits(responseCard.data);
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
            <img src={produits.img_cat}alt="image_produits_details" className="image_produits_details"/>
        </div>
        <div className='content_infos_produits'>
            <h2>{produits.nom_pro}</h2>
            <p>{produits.des_pro}</p>
            <div className='prix_boutton'>
            <p>{produits.prix}.00€</p>
            <button className='boutton_ajout_panier'>Ajouter au panier</button> 
            </div>
        </div>
    </div>
    <Footer/>    
    </>
}

export default DetailsPage;