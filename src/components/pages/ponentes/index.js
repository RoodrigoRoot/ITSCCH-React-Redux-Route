import React from 'react'
import Navbar from '../../Navbar'
import "./ponentes.css"
import Card from './cards-ponentes'


class Ponente extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>

                    <h1>Conoce a nuestros ponentes</h1>
                </div>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
        )
    }
}

export default Ponente

