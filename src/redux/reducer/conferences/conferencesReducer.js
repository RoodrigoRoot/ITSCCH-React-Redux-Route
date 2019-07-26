const INITIAL_STATE = {
    conferences:[]
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "traerConferencias":{
            return {...state, conferences: action.payload}

        }

        default: return state
    }
}