import React, { useContext } from 'react'
import './Navbar.css'
import { UserContext } from '../../contexts/Context'
import Profile from '../../Store/Profile/Profile'
import { useNavigate } from 'react-router-dom'

function Navbar () {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('token')
    setUser('')
  }

  return (
    <div className='Navbar'>
      <ul className='Navbar-ul'>
        <li>ImageLogo</li>
        <li>Search</li>
        <li onClick={() => navigate('/dashboard/Chats', { replace: true })}>
          Chat
        </li>
        <li
          onClick={() => {
            navigate('/dashboard/Profile', { replace: true })
          }}
        >
          Profile
        </li>
        <li onClick={logoutHandler}>Logout</li>
      </ul>
    </div>
  )
}

export default Navbar
