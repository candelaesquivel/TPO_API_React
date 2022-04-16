import { Component } from "react";
import { Link } from "react-router-dom";

class NavBarHeader extends Component
{
    render()
    {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to = '/'>Food</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to = '/home'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = '/recipes'>Recetas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = '/profile'>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = '/login'>Login/Register</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
          </div> 
        );
    }
}

export default NavBarHeader