import React, { useState } from "react";
import "../css/Banner1.css"

const Banner1 = () => {

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

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
                                <p className="descripcion">Pasos para usar la aplicacion: sigue los siguientes paos para poder comprender como se usa la aplicaion y puedeas consultar los datos de como vizualizar las tablas</p>
                                <p className="pasos">Paso 1: haz esto</p>
                                <p className="pasos">Paso 2: Oprime aqui</p>
                                <p className="pasos">Paso 3: Espera que cargue</p>
                                <p className="pasos">Paso 4: Vizualiza los datos</p>

                                <button onClick={closeModal}>Cerrar</button>
                            </div>
                        </div>

                    )

                    }
                </div>
            </div>



        </div>
    )
};

export default Banner1;
