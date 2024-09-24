import React from 'react'
import SignUp from './Store/SignUp/SignUp';
import Login from './Store/LoginIn/Login';
import Mainscreen from './Store/MainScreen/Mainscreen';
import './App.css';

function App() {
    return (
        <div className='App'>
            <div className='App-header'>
                <Mainscreen/>
            </div>

        </div>
    )
}

export default App