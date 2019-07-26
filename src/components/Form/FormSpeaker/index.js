import  React from 'react'

class FormSpeaker extends React.Component{
    render(){
        return(
            <form>
                <label>Nombre:</label>
                <input type="text" required />
                <label>Apellidos</label>
                <input type="text" required />
                <label>Job</label>
                <input type="text" required />
                <label>Twiiter</label>
                <input type="text" required />


            </form>
        )
    }
}
export default FormSpeaker