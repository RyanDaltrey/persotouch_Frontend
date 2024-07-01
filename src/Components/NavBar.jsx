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
            <h1>PERSOTOUCH</h1>
            <div className='icon_client_panier'>
            <PersonOutlineOutlinedIcon/>
            <ShoppingBagOutlinedIcon/>
            </div>
        </div>
    )
}

export default NavBar;
