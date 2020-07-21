import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp'

function App() {
  
  return (
    <BrowserRouter>
       <Route exact={true} path="/" render={() => <SignUp />} />
    </BrowserRouter>
  )
}

export default App;
