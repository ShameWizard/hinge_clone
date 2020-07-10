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
    actions: signUpSuccess,
    ): signUpState {
        switch (actions.type) {
        case SIGNUPSUCCESS: 
            return {
                email: actions.payload.email,
                loggedIn: true
            }
        }
    }

