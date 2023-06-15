import React from "react";
import "../css/Banner1.css"

const Banner1 = () => {
    return (
        <div className="banner1">
            <div className=" parteIzquierda">
                <img src="../../public/Img2.jpeg" alt="Imagen descriptiva" />
            </div>
            <div className=" parteDerecha">
                <h2>Ubicaciones</h2>
                <p>Aquí encontrarás los datos de las patologías filtradas directamente por departamento. ¡Recuerda que puedes ingresar a municipios particulares desde aquí si lo deseas!</p>
                <div>
                    <button>Accede a las ubicaciones</button>
                </div>
            </div>

        </div>
    )
};

export default Banner1;
