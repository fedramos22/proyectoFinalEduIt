import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ropaEjemplo from '../Assets/Images/ropaEjemplo.png'

const Carrito = () => {
    const [misCompras, setMiscompras] = useState('');
    const [user, setUser] = useState();

    const navigate = useNavigate({});

    useEffect(()=>{
        const producto = JSON.parse(localStorage.getItem('producto'));
        if (!producto) {
        } else {
            setUser(window.sessionStorage.getItem('user'));
            setMiscompras(producto);
        }
    },[navigate,]);

    const eliminarDatos = () => {
        const producto = JSON.parse(localStorage.getItem('producto'));
        if (!producto) {
            alert('No hay nada en el carrito.');
        } else{
            localStorage.removeItem('producto');
            navigate('/Tienda');
            alert('Su compra ha sido realizada con éxito.')
        }
    }

    return(
        <>
            <div className="container text-center">
                <div class="card text-center" style={{width: '12rem'}}>
                    <img src={ropaEjemplo} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{misCompras.nombre}</h5>
                        <p class="card-text">${misCompras.precio}</p>
                        <button onClick={eliminarDatos} class="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrito