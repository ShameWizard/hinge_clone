import {
    signUpSuccessType,
    signUpSuccessAction,
    signUpPayload
} from './types'

const initialState: signUpState = {
    loggedIn: true,
    email: '',
    password: ''
}

export function signUpReducer (
    state = initialState,
    actions: signUp,
    ): signUpState {
        switch (actions.type) {
            case signUpSuccessAction: 
            return {
                email: [...state, email: email]
            }
        }
    }
