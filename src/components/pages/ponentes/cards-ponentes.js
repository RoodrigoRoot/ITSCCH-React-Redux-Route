import React from 'react'
import "./cards.css"

const Card = ({speaker}) => {
    const {nombre,apellido,job,twiiter} = speaker
    return (
        <div className="cards">
            <p>{nombre}</p>
            <p>{apellido}</p>
            <p>{job}</p>
            <p>{twiiter}</p>
        </div>
    )
}
export default Card