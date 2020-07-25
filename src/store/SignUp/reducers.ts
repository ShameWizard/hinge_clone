import {
    signUpSuccess,
    SIGNUPSUCCESS,
    signUpPayload,
    signUpState,
} from './types'

const initialState: signUpState = {
    loggedIn: false,
    email: '',
    password: '',
    profileId: '',
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    sexualPreferences: '',
    agePreferences: [0, 0],
    education: '',
    job: '',
    chosenLocation: '',
    locationRange: 0,
    sentLikes: [],
    receivedLikes: [],
    sentDislikes: [],
      receivedDislikes: [],
            matches: [],
            picture1: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture2: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture3: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture4: {
                img: '',
                prompt: "",
                caption: "",
            },
            picture5: {
                img: '',
                prompt: "",
                caption: "",
            },
            question1: {
                selectedQuestion: "",
                answer: ''
            },
            question2: {
                selectedQuestion: "",
                answer: ''
            },
            question3: {
                selectedQuestion: "",
                answer: ''
            }
}

export function signUpReducer (
    state = initialState,
    action: signUpSuccess,
    ): signUpState {
        switch (action.type) {
        case SIGNUPSUCCESS: 
            return {
                ...state,
                loggedIn: true,
                email: action.payload.email,
                profileId: action.payload.profileId,
                password: action.payload.password,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                gender: action.payload.gender,
                sexualPreferences: action.payload.sexualPreferences,
                age: action.payload.age,
                agePreferences: action.payload.agePreferences,
                education: action.payload.education,
                job: action.payload.job,
                locationRange: action.payload.locationRange,
                chosenLocation: action.payload.chosenLocation,
                sentLikes: action.payload.sentLikes,
                receivedLikes: action.payload.receivedLikes,
                matches: action.payload.matches,
                sentDislikes: action.payload.sentDislikes,
                receivedDislikes: action.payload.receivedDislikes,
                picture1: action.payload.picture1,
                picture2: action.payload.picture2,
                picture3: action.payload.picture3,
                picture4: action.payload.picture4,
                picture5: action.payload.picture5,
                question1: action.payload.question1,
                question2: action.payload.question2,
                question3: action.payload.question3,
            }
        default:            
        return state
        }
    }

