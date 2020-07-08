import React, {FunctionComponent, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

type SignUpProps = {}

const SignUp:FunctionComponent<SignUpProps> = () => {
    const [attemptedEmail, setEmail] = useState('')
    const [attemptedPassword, setPassword] = useState('')

    const signUpHandler: any = async (evt: any) => {
        evt.preventDefault()
        let data = new FormData
        data.append('Email', attemptedEmail);
        data.append('Password', attemptedPassword)
        const response = await fetch('/signup', {method: "POST", body: data})
        const body = await response.text();
        const parsed = JSON.parse(body);
        if (!parsed.success) return alert(parsed.message)
        
    }
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