import ropaEjemplo from '../Assets/Images/ropaEjemplo.png'
import icono from '../Assets/Images/icono3modabel.jpg'
import tarjetaUno from '../Assets/Images/tarjetaUno.png'
import tarjetaDos from '../Assets/Images/tarjetaDos.png'
import tarjetaTres from '../Assets/Images/tarjetaTres.png'
import categoriaUno from '../Assets/Images/categoriaUno.png'
import categoriaDos from '../Assets/Images/categoriaDos.png'
import categoriaTres from '../Assets/Images/categoriaTres.png'
import categoriaCuatro from '../Assets/Images/categoriaCuatro.png'
import { useNavigate } from 'react-router-dom'
import MyVerticallyCenteredModal from '../Componentes/Modal'


const Home = () => {

    const navigate = useNavigate();

    const Tienda = () =>{
        navigate('/Tienda');
    }

    return(
    <>
        <main className="main">
            <section className="seccionUno">
                    <div className="tarjetaUno" style={{backgroundImage: `url(${tarjetaUno})`}}>
                        <span class="textoUno">
                            Estilo Exclusivo
                        </span>
                        <span class="textoDos">
                                Descubre la <br/> Moda
                        </span>
                        <label>
                            <input onClick={MyVerticallyCenteredModal} type="button" value="Más Info"/>
                        </label>
                    </div>
                    <div class="tarjetaDos" style={{backgroundImage: `url(${tarjetaDos})`}}>
                    </div>
            </section>
            <span class="textSeccion">Nueva Temporada</span>
            <section class="seccionDos">
                    <article class="cardArticulos">
                        <figure>
                            <img src={ropaEjemplo}
                                alt=""/>
                            <i class="bi bi-bag-plus"></i>
                        </figure>
                        <h2 class="descArticulo">
                            Soy un producto
                        </h2>
                        <span class="precioArticulo">
                            $20.00
                        </span>
                    </article>
                    <article class="cardArticulos">
                        <figure>
                            <img src={ropaEjemplo}
                                alt=""/>
                            <i class="bi bi-bag-plus"></i>
                        </figure>
                        <h2 class="descArticulo">
                            Soy un producto
                        </h2>
                        <span class="precioArticulo">
                            $20.00
                        </span>
                    </article>
                    <article class="cardArticulos">
                        <figure>
                            <img src={ropaEjemplo}
                                alt=""/>
                            <i class="bi bi-bag-plus"></i>
                        </figure>
                        <h2 class="descArticulo">
                            Soy un producto
                        </h2>
                        <span class="precioArticulo">
                            $20.00
                        </span>
                    </article>
                    <article class="cardArticulos">
                        <figure>
                            <img src={ropaEjemplo}
                                alt=""/>
                            <i class="bi bi-bag-plus"></i>
                        </figure>
                        <h2 class="descArticulo">
                            Soy un producto
                        </h2>
                        <div class="precioArticulo">
                            $20.00
                        </div>
                    </article>
                    <span class="cajaBoton">
                        <button class="boton" onClick={Tienda}>Cargar más</button>
                    </span>
            </section>
            <section class="categoria">
                <div class="catUno" style={{backgroundImage: `url(${categoriaTres})`}
                }>
                    <h2>Camisas y remeras</h2>
                </div>
                <div class="catDos" style={{backgroundImage: `url(${categoriaDos})`}}>
                    <h2>Pantalones y Polleras</h2>
                </div>
                <div class="catTres" style={{backgroundImage: `url(${categoriaUno})`}}>
                    <h2>Sweaters</h2>
                </div>
                <div class="catCuatro" style={{backgroundImage: `url(${categoriaCuatro})` }}>
                    <h2>Buzos y Camperas</h2>
                </div>
            </section>
            <div class="textSeccionDos">
                <figure>
                    <img src={icono} alt=""/>
                </figure>
                <h1 class="titulo">
                    Modabel
                </h1>
            </div>
            <section class="seccionTres">
                <div class="tarjetaTres" style={{backgroundImage: `url(${tarjetaTres})`}}>
                </div>
                <div class="tarjetaCuatro">
                    <h2>Tu nueva Tienda de Moda Favorita</h2>
                    <p class="textoCuatro">
                        Tras recibir numerosas solicitudes para tener una ubicación física, decidimos dar el salto y exhibir nuestros productos en un lugar único. Con una amplia gama de artículos para todos los gustos, todos son bienvenidos a explorar y adquirir algo especial. Vive una experiencia de compra exclusiva por tiempo limitado y agrega tus artículos preferidos a tu carrito de compras real. ¡Visítanos y deja el carrito virtual para después!
                    </p>
                </div>
            </section>
        </main>
    </>
    );
}

export default Home