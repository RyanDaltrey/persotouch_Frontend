import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccueilPage from './Pages/AccueilPage'
import './App.css';


function App() {
    return <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path ="/" element={<AccueilPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
}

export default App;