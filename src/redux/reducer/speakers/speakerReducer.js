const INITIAL_STATE = {
    speakers:[]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "getSpeakers":{
            return {...state, speakers: action.payload}
            }
        default: return state
        
    
    }        


}