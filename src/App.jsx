import React from 'react';
import ReactDOM from 'react-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';
import Categorias from './components/Categorias/Categorias';
import UseRef from './components/UseRef/UseRef';
import Banner from './components/Banner/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Banner />
      <Routes>
        <Route path='/' element={<Categorias />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />

      </Routes>

      <ItemListContainer greeting="¡Bienvenido a tu Tienda Pet!" />
      <ItemCount />


      <br />

      <div className="content">
        <p>
          Proyecto Pet nace de la necesidad de contar con un archivo en la nube que recopile todo lo
          que ocurre con tu mascota en términos de salud y bienestar general.
          Imagina poder ingresar desde tu celular, computadora (o cualquier dispositivo con Internet) a
          la historia clínica de tu mascota, donde tendrás con fecha y detalles todo sobre sus
          controles, procedimientos veterinarios, vacunación, recordatorios de vacunas, peluquería y
          mucho más.
          <br />
          <br />
          Adicionalmente podrás encontrar productos especializados para tus mascotas como alimento orgánico,
          juguetes hipoalergénicos y accesorios exclusivos.
          <br />
          <br />
          ¡Ser parte de la comunidad de Proyecto Pet es muy fácil! Regístrate en nuestra cuenta básica
          y accede a los beneficios del portal. Si deseas adquirir el plan premium, no dudes en
          contactarnos. Vive la experiencia Pet.
          <br />
        </p>
      </div>

      <UseRef />
      <Footer />
    </BrowserRouter>
  );
}






export default App;

