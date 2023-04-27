
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';





function App() {
  const nombre = "React";
  return (
    <>
      <NavBar />
     

      <ItemListContainer greeting="¡Bienvenido a tu Tienda Pet!" />

      
    </>

  );
}

export default App;
