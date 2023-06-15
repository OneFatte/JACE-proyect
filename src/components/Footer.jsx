import React from "react";
import "../css/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="izquierda">
                <img src="../../public/footer.png" alt="dane imagen" />
                <img src="../../public/footer2.png" alt="salud imagen" />
            </div>
            <div className="derecha">
                <h3>SIVIGILA</h3>
                <p>Copyright </p>
                <p>AMCHAM Colombia</p>
                <p>BIT</p>
                <p>JACE'S Proyect</p>
            </div>
        </div>
    )
};

export default Footer;
