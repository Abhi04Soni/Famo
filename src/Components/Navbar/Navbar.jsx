import React, { useContext } from 'react'
import './Navbar.css'
import { UserContext } from '../../contexts/Context'

function Navbar() {

    const { user, setUser } = useContext(UserContext)

    const logoutHandler = () => {
        localStorage.removeItem('token')
        setUser("");
    }

    return (
        <div className='Navbar'>
            <ul className='Navbar-ul'>
                <li>ImageLogo</li>
                <li>Search</li>
                <li>Chat</li>
                <li onClick={logoutHandler}>Logout</li>
            </ul>
        </div>
    )
}

export default Navbar