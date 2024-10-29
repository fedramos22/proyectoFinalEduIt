import './Alta.css'
import AltaImg from '../Assets/Images/fondoContacto.png'

const Alta = () => {
    return(
        <main style={{backgroundImage: `url(${AltaImg})`}} >
            <section>
                <form action="#">
                    <div className="infoUsuario">
                        <span className="msj">
                            Añadir nuevos productos
                        </span>
                        <span className="inputBox">
                            <label className="label">Nombre del producto
                                <input type="text" required/>
                            </label>
                        </span>
                        <span className="inputBox">
                            <label className="label">Precio
                                <input type="number" required/>
                            </label>
                        </span>
                        <span className="inputBox">
                            <label className="label">Stock
                                <input type="number" required/>
                            </label>
                        </span>
                        <span className="inputBox">
                            <label className="label">Nombre de Marca
                                <input type="text" required/>
                            </label>
                        </span>
                        <span className="inputBox">
                            <label className="label">Categoría
                                <select>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    <option>XXXL</option>
                                </select>
                            </label>
                        </span>
                        <span className="inputBox">
                            <label className="label">Descripción corta
                                <input type="text" required/>
                            </label>
                        </span>
                        <span className="inputBox">
                            <label className="label">Descripción ampliada
                                <textarea name="message" placeholder="Descripción detallada" required cols="20"></textarea>
                            </label>
                        </span>
                        <span class="inputBox">
                            <label className="label"> Envío sin cargo
                            </label>
                                <input type="radio" name="envío" required id="si"/>
                                <label for="si">Si</label>
                                <input type="radio" name="envío" required id="no"/>
                                <label for="no">No</label>
                        </span>
                        <span className="inputBox">
                            <label for="edad" className="label">Edad desde
                            <input type="number" id="edad" min="0" max="100" required/>
                            </label>
                        </span>
                        <span className="inputBox">
                            <label for="edad2" className="label">Edad hasta
                                <input type="number" id="edad2" min="0" max="100" required/>
                            </label>
                        </span>
                        <span class="inputBoxFoto">
                            <label className="labelFoto">Foto del producto
                                <input type="file" required/>
                            </label>
                        </span>
                    </div>
                    <span class="botonBox">
                            <label  className="label">
                                <input type="submit" value="Subir Producto"/>
                            </label>
                    </span>
                </form>
            </section>
        </main>
    );
}

export default Alta