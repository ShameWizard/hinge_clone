import React, {FunctionComponent, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../store/SignUp/actions'
import { Redirect } from 'react-router-dom'

type SignUpProps = {}
const dispatch = useDispatch()

const SignUp:FunctionComponent<SignUpProps> = () => {
    const [attemptedEmail, setEmail] = useState('')
    const [attemptedPassword, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const signUpHandler: any = async (evt: any) => {
        evt.preventDefault()
        let data = new FormData
        data.append('Email', attemptedEmail);
        data.append('Password', attemptedPassword)
        const response = await fetch('/signup', {method: "POST", body: data})
        const body = await response.text();
        const parsed = JSON.parse(body);
        if (!parsed.success) return alert(parsed.message)
        dispatch(signUp({email: attemptedEmail}))

    }
    if (loggedIn === true) return (
        <Redirect to={'/home'} />
    )
    return (
        <div>
            <form onSubmit={signUpHandler()}>
            <h2>SignUp</h2>
            <h4>Email</h4>
            <input placeholder='Email' onChange={e => setEmail(e.target.value)} type='text'></input>
            <h4>Password</h4>
            <input placeholder='Password' onChange={e => setPassword(e.target.value)} type='text'/>
            <input type='submit'/>
            </form>
        </div>
    )
}

export default SignUp