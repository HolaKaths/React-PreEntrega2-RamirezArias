import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import mascota from './mascota.png';

const NavBar = () => {
    return (
        <header>
            <img src={mascota} alt="Logo Pet" />
           
            <h1> Proyecto Pet</h1>
            
            <nav>
                <ul>
                    <li>
                    ¿Qué es Proyecto Pet?
                    </li>
                    <li>
                        Calculadora
                    </li>
                    <li>
                        Random Pet
                    </li>
                    <li>
                        Tienda Pet
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </header> 
    );
};

export default NavBar;

