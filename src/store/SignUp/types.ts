export const SIGNUPSUCCESS = 'SIGNUPSUCCESS'

export interface signUpPayload {
    email: string,
    profileId: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    sexualPreferences: string,
    age: number,
    agePreferences: [number, number]
    education: string,
    job: string,
    locationRange: number
    chosenLocation: string,
    sentLikes: string[],
    receivedLikes: string[],
    matches: string[],
    sentDislikes: string[],
    receivedDislikes: string[],
    picture1: {
        img: string,
        caption: string,
        prompt: string
    },
    picture2: {
        img: string,
        caption: string,
        prompt: string
    },
    picture3: {
        img: string,
        caption: string,
        prompt: string
    },
    picture4: {
        img: string,
        caption: string,
        prompt: string
    },
    picture5: {
        img: string,
        caption: string,
        prompt: string
    },
    question1: {
        selectedQuestion: string,
        answer: string
    },
    question2: {
        selectedQuestion: string,
        answer: string
    },
    question3: {
        selectedQuestion: string,
        answer: string
    },
}
export interface signUpState {
    email: string,
    loggedIn: boolean,
    profileId: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    sexualPreferences: string,
    age: number,
    agePreferences: [number, number]
    education: string,
    job: string,
    locationRange: number
    chosenLocation: string,
    sentLikes: string[],
    receivedLikes: string[],
    matches: string[],
    sentDislikes: string[],
    receivedDislikes: string[],
    picture1: {
        img: string,
        caption: string,
        prompt: string
    },
    picture2: {
        img: string,
        caption: string,
        prompt: string
    },
    picture3: {
        img: string,
        caption: string,
        prompt: string
    },
    picture4: {
        img: string,
        caption: string,
        prompt: string
    },
    picture5: {
        img: string,
        caption: string,
        prompt: string
    },
    question1: {
        selectedQuestion: string,
        answer: string
    },
    question2: {
        selectedQuestion: string,
        answer: string
    },
    question3: {
        selectedQuestion: string,
        answer: string
    },

}
export interface signUpSuccess {
    type: typeof SIGNUPSUCCESS
    payload: signUpPayload
}



