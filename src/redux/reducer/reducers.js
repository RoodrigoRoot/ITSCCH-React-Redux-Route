import {combineReducers} from 'redux'
import conferencesReducer from './conferences/conferencesReducer'
import speakerReducer from './speakers/speakerReducer'


export default combineReducers({
    conferencesReducer,
    speakerReducer
})