import React, { useContext, useState } from 'react'
import './Navbar.css'
import { UserContext } from '../../contexts/Context'
import Profile from '../../Store/Profile/Profile'
import { useNavigate } from 'react-router-dom'
import Search from '../SearchComp/Search'
import logo from '../../Assets/logo.png'

function Navbar () {
  const { user, setUser } = useContext(UserContext)
  const [userSearch, setUserSearch] = useState(false)
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('token')
    setUser('')
  }
  const toggleEvent = () => {
    setUserSearch(prev => !prev) // Toggle the state
  }

  return (
    <div className='Navbar'>
      <ul className='Navbar-ul'>
        <li>
          <img src={logo} alt='' width={'80px'} height={'50px'} />
        </li>
        <li onClick={toggleEvent}>Search</li>

        <li className='searchBar'>
          <Search />
        </li>
        <li>
          <div class='dropdown'>
            <button class='dropbtn'>
              Dropdown
              <i class='fa fa-caret-down'></i>
            </button>
            <div class='dropdown-content'>
              <a
                onClick={() => navigate('/dashboard/Chats', { replace: true })}
              >
                Chat
              </a>
              <a
                onClick={() => {
                  navigate('/dashboard/Profile', { replace: true })
                }}
              >
               Profile
              </a>
              <a onClick={logoutHandler}>Logout</a>
            </div>
          </div>
        </li>
        {/* <li onClick={() => navigate('/dashboard/Chats', { replace: true })}>
          Chat
        </li>
        <li
          onClick={() => {
            navigate('/dashboard/Profile', { replace: true })
          }}
        >
          Profile
        </li>
        <li onClick={logoutHandler}>Logout</li> */}
      </ul>
    </div>
  )
}

export default Navbar
