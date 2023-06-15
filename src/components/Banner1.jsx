import React, { useState } from "react";
import "../css/Banner1.css"

const Banner1 = ({ openModal, closeModal, open }) => {

    // const [open, setOpen] = useState(false);

    // const openModal = () => {
    //     setOpen(true);
    // }

    // const closeModal = () => {
    //     setOpen(false);
    // }

    return (
        <div className="banner1">
            <div className="texto">

                <div>
                    <img src="../../public/IconoSivigila.svg" alt="icono" />
                    <h1>Enfermedades que afectan a Colombia</h1>
                </div>
                <p>Aquí encontrarás las enfermedades que han generado mayor impacto en Colombia durante el último año. Puedes buscar  en estos las enfermedades que más afectan al departamento seleccionado.</p>
                <p>En el botón que  encuentras a continuacion puedes encontar más detalles de como navegar en el mapa</p>
                <div>
                    <button onClick={openModal}>Ver Instrucciones</button>

                    {open && (
                        <div className="modalContainer">
                            <div className="modal">
                                <h1>Enfermedades que afectan a Colombia</h1>
                                <p className="descripcion">Pasos para usar la aplicacion: Sigue los pasos a continuación para visualizar los datos.</p>
                                <p className="pasos">Paso 1: Aquí puedes seleccionar las enfermedades que quieres ver:</p>
                                <img src="../../public/pasos1.png" alt="" />
                                <p className="pasos">Paso 2: Aqui podemos cambiar de año para mirar otros datos:</p>
                                <img src="../../public/pasos2.png" alt="" />
                                <p className="pasos">Paso 3: Selecciona aquí los departamentos de los que desees visualizar los datos:</p>
                                <img src="../../public/pasos3.png" alt="" />
                                <p className="pasos">Paso 4: Para regresar a la data anterior</p>
                                <img src="../../public/pasos4.png" alt="" />

                                <button onClick={closeModal}>Cerrar</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>



        </div>
    )
};

export default Banner1;
