import {SIGNUPSUCCESS, signUpPayload, signUpSuccess} from './types'

export function signUp(newPayload: signUpPayload): signUpSuccess {
    return {
        type: SIGNUPSUCCESS,
        payload: newPayload
    }
}

