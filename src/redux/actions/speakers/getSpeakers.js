import axios from 'axios'
const traerSpeakers = () => async (dispatch) =>{
const response = await axios.get('http://localhost:3002/ponente')
    dispatch({
        type:"getSpeakers",
        payload: response.data
    })
}
export default traerSpeakers