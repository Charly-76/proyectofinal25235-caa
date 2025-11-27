import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Ofertas from './components/Ofertas';
import Nosotros from './pages/Nosotros';
import Infaltables from './components/Infaltables';
import MasVendidos from "./components/MasVendidos";
import Login from './pages/Login'; 
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext';
import Carrito from './pages/Carrito'; 
import CrudProductos from './components/CrudProductos';
import './App.css';


function App() {

  return (
      <CartProvider>
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/masvendidos" element={<MasVendidos />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/infaltables" element={<Infaltables />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/crud" element={<CrudProductos />} />
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  )
}

export default App