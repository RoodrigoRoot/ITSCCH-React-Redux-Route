import  React from 'react'

class FormConference extends React.Component{
    render(){
        return(
            <form>
                
                <label>Nombre:</label>
                <input type="text" required />
                <label>Job</label>
                <input type="text" required />
                <label>Twiiter</label>
                <input type="text" required />


            </form>
        )
    }
}
export default FormConference