export const signUpSuccessType = 'signUpSuccess'

export interface signUpPayload {
    Email: 'string',
    password: 'string',
}
export interface signUpSuccessAction {
    type: typeof signUpSuccessType
    payload: signUpPayload
}

