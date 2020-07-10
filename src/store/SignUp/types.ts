export const SIGNUPSUCCESS = 'SIGNUPSUCCESS'

export interface signUpPayload {
    email: string,
}
export interface signUpState {
    email: string,
    loggedIn: boolean
}
export interface signUpSuccess {
    type: typeof SIGNUPSUCCESS
    payload: signUpPayload
}



