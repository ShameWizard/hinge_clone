import { signUpReducer} from './SignUp/reducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    signUpReducer
})

export default rootReducer