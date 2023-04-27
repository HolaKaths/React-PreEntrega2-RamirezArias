import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import mascota from '../Images/mascota.png';

const NavBar = () => {

    return (
        <header>
            <img src={mascota} alt="Logo Pet" />
            <h1> Tienda Pet</h1>
            <nav>
                <ul>
                    <li>
                        Calculadora
                    </li>
                    <li>
                        Instapets
                    </li>
                    <li>
                        ¿Qué es Proyecto Pet?
                    </li>
                    <li>
                        Random Pet
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header> 
    );
};

export default NavBar
