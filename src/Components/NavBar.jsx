import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import '../Styles/NavBar.css'

const NavBar = () => {
    return ( 
       
        <div className='block_navbar'>
            <div className='content_serviceClient'>
            <RoomServiceOutlinedIcon/><p>Service client</p>
            </div>
            <a href="/" className='lien_accueil'><h1>PERSOTOUCH</h1></a>
            <div className='icon_client_panier'>
             <a href="/inscription"><PersonOutlineOutlinedIcon  className='icon_utilisateur'/></a>
            <ShoppingBagOutlinedIcon/>
            </div>
        </div>
    )
}

export default NavBar;
