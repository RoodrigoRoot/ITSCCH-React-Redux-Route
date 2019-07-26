import React from 'react'
import "./ponentes.css"
import Card from './cards-ponentes'
import {connect} from 'react-redux'
import speakerAction from '../../../redux/actions/speakers/getSpeakers'
import { bindActionCreators } from 'redux';
import BtnSpeaker from '../../BtnForm/'

class Ponente extends React.Component {
  
        componentDidMount(){
            this.props.speakerAction()
        }


        renderSpeakers(speakers){
            return speakers.map( (item,index) => <Card key = {index} speaker = {item}>

            </Card> )

        }
    render() {
        
        return (
            <div >

                <div>

                    <h1>Conoce a nuestros ponentes</h1>
                    <BtnSpeaker > Speaker </BtnSpeaker>
                </div>
                <div className="card" >
               {this.renderSpeakers(this.props.speakers)}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state.speakerReducer
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        speakerAction
    },dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps) (Ponente)

