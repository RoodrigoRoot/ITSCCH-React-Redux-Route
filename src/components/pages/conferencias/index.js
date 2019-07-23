import React from 'react'
import './conferencias.css'
import Item from './Item-conferencias'

class Conferences extends React.Component {
    render() {
        return (
            <div className="contain">
                
                <h1>C o n f e r e n c i a s</h1>
                <div className="content-conference">

                    <div className="list-conference">
                        <Item />
                        
                        
                    </div>
                </div>

            </div>
        )
    }

}

export default Conferences