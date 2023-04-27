
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
                <p>Encuentra todos los productos para tu mascotas.</p>
            </div>

      <Footer />
    </>

  );
}

export default App;
