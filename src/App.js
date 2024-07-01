import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



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