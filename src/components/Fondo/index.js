import React from 'react'
import "./fondo.css"
import calendario from '../images/calendario.svg'
import {BrowserRouter} from 'react-router-dom'
import GPS from '../images/GPS.svg'

const Fondo = () => {
    return (
        <div className="main">
            <div >
                <img id="img-logo" src="https://userscontent2.emaze.com/images/c2c46932-3909-4bc5-af30-8d668442d339/1f1cf62f4e09bfbde0dbfa611366e572.png"
                alt="Logo del Tec" />
            </div>
            <div className="content">
                <div>
                    <h1><strong>¡Bienvenido una vez más!</strong></h1>
                    <p>Este 2 de Agosto el ITSCCH te espera una vez más para la semana</p>
                    <p> de la Carrera de Ingeniería en Tecnologías de la Información y
                     Comunicaciones.
                        </p>
                    <address><strong> <img 
                    src={GPS}
                    height='25' 
                    alt='Ubicacion'/>Carretera Ometepec Igualapa Kilómetro 1, De Talapa, 41700 Ometepec, Gro.</strong></address>
                    <br /> <br />
                        <BrowserRouter>
                    <a href="/conferencias" id="btn-eventos" >Eventos</a>
                    </BrowserRouter>
                    <br /><br />
                    <div><img src={calendario} width="20" alt='Calendario' /> 2 de Agosto</div>
                </div>

                <div className="container-tec-logo">
                    <figure>
                        <img id="tec-logo" src="https://www.pnpec.sep.gob.mx/images/instituciones/color/12MSU0330L.jpg" alt="Logo del Tec" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default Fondo