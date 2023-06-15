import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/Navbar.css"



const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header>
                <div className="logo"><Link to={'/'}><img src="../../public/Logo.jpeg" alt="" /></Link></div>
                <div className="iconPerfil"><img src="../../public/iconoPerfil.svg" /></div>
            </header>
            <nav className="navBar">
                <Link className="enlace">Eventos</Link>
                <Link className="enlace">Incidencias</Link>
                <Link className="enlace" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Ubicaciones
                    {isDropdownOpen && (
                        <ul className="dropdown">
                            <li>Producto 1</li>
                            <li>Producto 2</li>
                            <li>Producto 3</li>
                        </ul>
                    )}
                </Link>
            </nav>

        </>
    )
};

export default Navbar;
