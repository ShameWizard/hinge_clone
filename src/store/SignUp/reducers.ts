import {
    signUpSuccess,
    SIGNUPSUCCESS,
    signUpPayload,
    signUpState,
} from './types'

const initialState: signUpState = {
    loggedIn: false,
    email: ''
}

export function signUpReducer (
    state = initialState,
    action: signUpSuccess,
    ): signUpState {
        switch (action.type) {
        case SIGNUPSUCCESS: 
            return {
                ...state,
                email: action.payload.email,
                loggedIn: true
            }
        default:            
        return state
        }
    }

