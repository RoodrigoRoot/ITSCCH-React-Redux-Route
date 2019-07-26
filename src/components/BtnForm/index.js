import React from 'react'
import {Link} from 'react-router-dom'


class ButtonForm extends React.Component{
    


    render(){
       
       return(
           
            
            <div>
            <a href={"/"+this.props.children}>Add{this.props.children}</a>

            </div>

        )
    }
   
}
export default ButtonForm