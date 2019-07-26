import React from 'react'
import './conferencias.css'
import Item from './Item-conferencias'
import {connect} from 'react-redux'
import getConference from '../../../redux/actions/conferences/getConferences'
import { bindActionCreators } from 'redux';
import BtnSpeaker from '../../BtnForm/'

class Conferences extends React.Component {

    renderConferences(conferences){
        return conferences.map( (item, index) => <Item key={index} conference = {item}></Item>)
        
    }
    componentDidMount(){
        
        this.props.getConference()
    }

    render() {

        
        return (
            <div className="contain">
                
                <h1>C o n f e r e n c i a s</h1>
                <BtnSpeaker > Conferences </BtnSpeaker>
                <div className="content-conference">

                    <div className="list-conference">
                        {this.renderConferences(this.props.conferences)}
                        
                        
                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    
    return state.conferencesReducer

}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getConference
    }, dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps) (Conferences)