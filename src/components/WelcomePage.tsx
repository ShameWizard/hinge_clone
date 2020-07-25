import React, { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'

type WelcomePageProps = {}

const WelcomePage:FunctionComponent<WelcomePageProps> = () => {
    return (
        <div>
        <div className='logoWrap'>
            <img className='welcomeLogo' src='/Hinge_Logo.png' />
            
        </div>
        <div className='centerDiv'>
            <h4 className='flavorTitle'>Designed to be deleted.</h4>
        </div>
        <div className='btnWrap'>
            <Link className='btn' to='/signup'>Sign Up</Link>    
            <Link className='btn white' to='/login'>Login</Link>
        </div>
        <div className='centerDiv'>
            <p className='welcomeParagraph'>
                This is a demo/clone of the popular dating app Hinge! It was built using React, NodeJS, Redux, MongoDB, Hooks and many more good things :) -Alex Shaw
            </p>
        </div>

        </div>
    )
}

export default WelcomePage