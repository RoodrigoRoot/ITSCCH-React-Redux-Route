import React from 'react'
import './items.css'

const Item = ({conference}) => {
    const {nombre,duracion,Ponente,Twiiter} = conference
    return (
        <div className="conferences">
            <p>{nombre}</p>
            <p>{Ponente}</p>
            <p>{duracion}</p>
            <p>{Twiiter}</p>

        </div>
    )
}

export default Item