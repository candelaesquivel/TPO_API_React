import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component
{
    render(){
        return (
            <div>
                <footer className="text-white py-4 bg-dark">
                    <div className="container">
                        <nav className="row">
                            <h1 className="col-md-3">Food</h1>
                            <ul className="col-12 col-md-3 list-unstyled">
                                <li className="">Contactenos</li>
                                <li className="">+54 123456789</li>
                                <li className="">Mail: uade@edu.ar</li>
                            </ul>

                            <ul className="col-12 col-md-3 list-unstyled">
                                <li className="">Sobre Nosotros</li>
                                <li><Link to='' className="text-reset">Quienes Somos</Link></li>
                                <li><Link to='' className="text-reset">Como Usar</Link></li>
                            </ul>

                            <ul className="col-12 col-md-3 list-unstyled">
                                <li className="">Nuestras Redes</li>
                                <li className="d-flex justify-content-between">
                                    <Link to='/' className="text-reset">
                                        <i class="bi bi-facebook"></i>
                                    </Link>
                                    <Link to='/' className="text-reset">
                                        <i class="bi bi-whatsapp"></i>
                                    </Link>
                                    <Link to='/' className="text-reset">
                                        <i class="bi bi-twitter"></i>
                                    </Link>
                                </li>
                            </ul>

                            <div className="container">
                                <p className="text-center">Creada por Candela Esquivel y Antonio Berti 
                                <br></br>
                                con fines academicos para UADE</p>
                            </div>

                       </nav>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;