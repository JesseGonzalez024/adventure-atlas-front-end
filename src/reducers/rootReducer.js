import {combineReducers} from 'redux';
import adventureReducer from './adventureReducer';
import photoReducer from './photoReducer'
import tagReducer from './tagReducer'

export default combineReducers({
    adventureReducer,
    photoReducer,
    tagReducer

})