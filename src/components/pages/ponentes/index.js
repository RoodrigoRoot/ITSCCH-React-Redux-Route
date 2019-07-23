import React from 'react'
import "./ponentes.css"
import Card from './cards-ponentes'


class Ponente extends React.Component {
    render() {
        return (
            <div >
                
                <div>

                    <h1>Conoce a nuestros ponentes</h1>
                </div>
                <div className="card" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    

                </div>
            </div>
        )
    }
}

export default Ponente

