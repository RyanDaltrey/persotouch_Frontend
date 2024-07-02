import '../Styles/FooterCard.css'

const Footer = () => {
    return(
        <div className='block_footer'>
            <div className='content_footer'>
                <p>Nos Réseaux</p>
                <p>Nous contacter</p>
            </div>
            <div className='nos_reseaux_et_images_reseaux'>    
                <div className='block_reseaux_sociaux'>
                <img src={require("../Assets/instagram_icon_footer.png")} alt="instagram_icon"/>
                <img src={require("../Assets/tiktok_icon_footer.png")} alt="tiktok_icon" />
                <img src={require("../Assets/x_icon_footer.png")} alt="x_icon" />
                <img src={require("../Assets/facebook_icon_footer.png")} alt="facebook_icon" />
                </div>
            </div>
            <div className='content_mentions_legales'>
                <p>CopyRight©</p>
                <p>Mentions Légales</p>
            </div>
        </div>
    )
}

export default Footer;