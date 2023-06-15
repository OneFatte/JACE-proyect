import React from 'react';
import "../css/Navbar.css"


const Navbar = () => {

    return (
        <>
            <header>
                <div className="logo">
                    <img src="../../public/Logo.jpeg" alt="Logos" />
                    <img src="../../public/logo2.png" alt="Logos" className='logo2' />
                    <img src="../../public/logo3.jfif" alt="Logos" />
                </div>
                {/* <div className="iconPerfil"><img src="../../public/iconoPerfil.svg" /></div> */}
            </header>
            <nav className="navBar">
                <li className="enlace">Instrucciones</li>
                <li className="enlace">Datos</li>

            </nav>

        </>
    )
};

export default Navbar;
