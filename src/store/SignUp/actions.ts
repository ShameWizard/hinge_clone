import {signUpSuccessAction, signUpPayload, signUpSuccessType} from './types'

export function signUp(newPayload: signUpPayload): signUpSuccessAction {
    return {
        type: signUpSuccessType,
        payload: newPayload
    }
}

