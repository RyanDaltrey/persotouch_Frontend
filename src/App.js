import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccueilPage from './Pages/AccueilPage'
import './App.css';
import InscriptionPage from './Pages/InscriptionPage';
import ConnexionPage from './Pages/ConnexionPage';


function App() {
    return <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path ="/" element={<AccueilPage/>}/>
        <Route path='/inscription' element={<InscriptionPage/>}/>
        <Route path='/connexion' element={<ConnexionPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
}

export default App;