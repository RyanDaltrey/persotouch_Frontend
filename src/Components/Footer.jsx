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
                <a href='https://www.instagram.com/persotouch_/' target='blank'><img src={require("../Assets/instagram_icon_footer.png")} alt="instagram_icon"/></a>
                <a href=''><img src={require("../Assets/tiktok_icon_footer.png")} alt="tiktok_icon" /></a>
                <a href=''><img src={require("../Assets/x_icon_footer.png")} alt="x_icon" /></a>
                <a href='https://www.facebook.com/profile.php?id=100089923894831' target='blank'><img src={require("../Assets/facebook_icon_footer.png")} alt="facebook_icon" /></a>
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