
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';




function App() {
  const nombre = "React";
  return (
    <>
      <NavBar />

      <br />
      <ItemListContainer greeting="¡Bienvenido a tu Tienda Pet!" />
      <br />

      <div class="content">
        <p>Encuentra todos los productos para tus mascotas.

          Proyecto Pet nace de la necesidad de contar con un archivo en la nube que recopile todo lo
          que ocurre con tu mascota en términos de salud y bienestar general.
          Imagina poder ingresar desde tu celular, computador (o cualquier dispositivo con Internet) a
          ls historia clínica de tu mascota, donde tendrás con fecha y detalles todo sobre sus
          controles, procedimientos veterinarios, vacunación, recordatorios de vacunas, peluquería y
          mucho más.
          <br />
        </p>
      </div>

      <Footer />
    </>

  );
}

export default App;
