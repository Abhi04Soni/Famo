import React, { useEffect, useState, useContext } from 'react'
import './Login.css'
import axios from 'axios'
import { UserContext } from '../../contexts/Context'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logedin, setLogedin] = useState(false)
  const [index, setIndex] = useState(0)

  const images = ['src/assets/loginPic1.jpg', 'src/assets/loginPic2.jpg']

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 10000)
    return () => clearInterval(timeInterval)
  }, [])

  const { setUser } = useContext(UserContext)

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password
      })

      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        console.log('Login successful')

        setLogedin(true)
        setUser(email)

        const dashboardResponse = await axios.get(
          'http://localhost:3000/dashboard',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        )
        console.log('Dashboard data:', dashboardResponse.headers)
        console.log('Dashboard data:', dashboardResponse.data)
      }
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  useEffect(() => {
    async function checkToken () {
      console.log('Checking token status...')
      if (logedin) {
        try {
          const dashboardResponse = await axios.get(
            'http://localhost:3000/dashboard',
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            }
          )

          console.log('Dashboard data:', dashboardResponse.data)
          setUser(email)
        } catch (error) {
          console.error('Error fetching dashboard data:', error)
        }
      }
    }

    checkToken()
  }, [logedin, email, setUser])

  return (
    <div className='Login-container'>
      {/* Left Side - Thumbnail */}
      <div className='loginPageThumb'>
        <div className='loginPageThumbImage'>
          <img className='loginImageRoulette' src={images[index]} alt='' />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className='loginPageForm'>
        <h2>Login Into Account</h2>
        <input
          type='text'
          placeholder='Enter Username Or Email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className='loginCheckbox'>
        <input type='checkbox' name='remember' id='remember' />
          <label htmlFor='remember'>I agree the terms and conditions</label>
        </div>
        <button className='login-btn' onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  )
}
