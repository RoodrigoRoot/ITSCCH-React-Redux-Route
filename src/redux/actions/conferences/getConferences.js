import axios from  'axios'
const GETCONFERENCES = () => async (dispatch) =>{
    let response = await axios.get('http://localhost:3000/Conferencias')
    dispatch({
        type:"traerConferencias",
        payload: response.data
    })
}

export default GETCONFERENCES