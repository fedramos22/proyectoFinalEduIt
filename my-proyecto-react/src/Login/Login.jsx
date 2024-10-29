import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Login.css';
import ContactoFondo from '../Assets/Images/fondoContacto.png'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    
    const loginUser = (event) =>{

        event.preventDefault();

        console.log(email);
        console.log(password);
        
        if (email === '' || password === '') {
            alert('Complete los campos.');
            return;
        }

        if (email === 'pepe@gmail.com' && password === '1234') {
            alert('Login realizado.');
            window.sessionStorage.setItem('user', 'pepe@gmail.com');
            navigate("/admin");
        } else {
            alert("Usuario o constraseña incorrecta");
            navigate('/login');
        }
        
    }

    return(
        <>
            <main style= {{backgroundImage: `url(${ContactoFondo})`}}>
                <div className="card">
                    <form>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Nombre de Usuario" required/>
                            <i className="bi bi-person-fill"></i>
                        </div>
                        <div className="input-box">
                            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Constraseña" required/>
                            <i className="bi bi-lock-fill"></i>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Recuerdame</label>
                        </div>

                        <button onClick={loginUser} type="submit">Login</button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login