import { Link } from "react-router-dom";
import OffCanvasExample from "../Carrito/Carrito2";

const Navbar = () => {
    const buscar = () =>{
        alert('Buscando...')
    }

    return(
        <>
            <header class="cabecera">
                <nav class="navegador">
                    <h1 class="nombreComercio">Modabel</h1>
                    <ul class="navLinks">
                        <li>
                            <Link to={'/'}>Inicio</Link>
                        </li>
                        <li>
                            <Link to={'Tienda'}>Tienda</Link>
                        </li>
                        <li>
                            <Link to={'Contacto'}>Contacto</Link>
                        </li>
                        <li>
                            <Link to={'Alta'}>Alta</Link>
                        </li>
                        <li>
                            <input type="search" placeholder="Buscar"/> <i class="bi bi-search" id="buscar" onClick={buscar}></i>
                        </li>
                        <li className="login">
                            <Link to={'Login'}>Login</Link>
                        </li>
                        <li className="login">
                            <OffCanvasExample />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar