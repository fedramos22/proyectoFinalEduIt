import './Contacto.css'
import ContactoFondo from '../Assets/Images/fondoContacto.png'


const Contacto = () => {
    return(
        <>
            <main style= {{backgroundImage: `url(${ContactoFondo})`}}>
                <section>
                    <form action="#">
                        <div className="infoUsuario">
                            <span className="msj">
                                Deja tu consulta o mensaje y te responderemos
                            </span>
                            <span class="inputBox">
                                <label className="label">Nombre Completo
                                    <input type="text"  required/>
                                </label>
                            </span>
                            <span class="inputBox">
                                <label className="label">Email
                                    <input type="email"  required/>
                                </label>
                            </span>
                            <span class="inputBox">
                                <label className="label">Tú Consulta o Comentario
                                    <textarea name="message" placeholder="Tu mensaje" required cols="20"></textarea>
                                </label>
                            </span>
                            <span className="botonBox">
                                <label className="label">
                                    <input type="submit" value="Enviar"/>
                                </label>
                            </span>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Contacto