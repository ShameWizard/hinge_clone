import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import Login from './components/Login'
import WelcomePage from './components/WelcomePage'

function App() {
  
  return (
    <BrowserRouter>
       <Route exact={true} path="/" render={() => <WelcomePage />} />
       <Route exact={true} path='/signup' render={() => <SignUp />} />
       <Route exact={true} path='/profile' render={() => <Profile/>} />
       <Route exact={true} path='/login' render={() => <Login/>}  />
    </BrowserRouter>
  )
}

export default App;
