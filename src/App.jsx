import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';
import Categorias from './components/Categorias/Categorias';
import UseRef from './components/UseRef/UseRef';
import Banner from './components/Banner/Banner';



const categorias = ["Alimentos", "Snacks", "Higiene", "Accesorios", "Juguetes"];

function App() {
  const nombre = "React";
  return (
    <>
      <NavBar />

      <br />
      <Banner />
      <Categorias  />
      <ItemListContainer  greeting="¡Bienvenido a tu Tienda Pet!" />



      <ItemCount />
      <Vista />
      <Mensaje />
      <br />

      <div className="content">
        <p>

          Proyecto Pet nace de la necesidad de contar con un archivo en la nube que recopile todo lo
          que ocurre con tu mascota en términos de salud y bienestar general.
          Imagina poder ingresar desde tu celular, computador (o cualquier dispositivo con Internet) a
          la historia clínica de tu mascota, donde tendrás con fecha y detalles todo sobre sus
          controles, procedimientos veterinarios, vacunación, recordatorios de vacunas, peluquería y
          mucho más.
          <br />
          <br />
          Adicionalmente podrás encontrar productos especializados para tus mascotas como alimento orgánico,
          juguetes hipoalergénicos y accesorios exclusivos.
          <br />
          <br />
          ¡Ser parte de la comunidad de Proyecto Pet es muy fácil! Registrate en nuestra cuenta básica
          y accede a los beneficios del portal. Si deseas adquirir el plan premium, no dudes en
          contactarnos. Vive la experiencia Pet.


          <br />
        </p>
      </div>


      <UseRef />
      <Footer />

    </>

  );
}

export default App;
