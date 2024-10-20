import React, { useState, useContext } from 'react'
import './SignUp.css'
import axios from 'axios'
import { UserContext } from '../../contexts/Context'

export default function SignUp () {
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const emailHandler = () => {
    try {
      console.log('inside email')
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const phoneHandler = () => {
    try {
      console.log('inside phone')
      const phoneRegex = /^\d{10}$/
      if (!phoneRegex.test(phoneNo)) {
        alert('Please enter a valid phone number')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const passwordHandler = () => {
    try {
      console.log('inside password')
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
      if (!passRegex.test(password)) {
        alert('Please enter a valid password')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const confirmPasswordHandler = () => {
    try {
      console.log('inside confirm password')
      if (!(password.length > 0)) {
        alert('Please enter a password First')
      }
      if (password.length > 0 && password !== confirmPassword) {
        alert('Passwords do not match')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async e => {
    console.log('inside submit')
    e.preventDefault()
    emailHandler()
    console.log('done emailHandler')
    phoneHandler()
    console.log('done phoneHandler')
    passwordHandler()
    console.log('done passwordHandler')
    confirmPasswordHandler()
    console.log('done confirmPasswordHandler')

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        email,
        password
      })

      if (response.data.token) {
        console.log(response.data.token)
        console.log(response.data)
        localStorage.setItem('token', response.data.token)
        console.log('Login successful')
        setUser(email);

        const dashboardResponse = await axios.get(
          'http://localhost:3000/dashboard',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        )
        // console.log('Dashboard data:', dashboardResponse.headers)
        console.log('Dashboard data:', dashboardResponse.data)
      } else {
        console.log('Login Failed or User Already Exists')
        console.log('Login Failed')
        console.log(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='SignUp-container' onSubmit={handleSubmit}>
      <div>Create a Account</div>
      <div className='Image'></div>
      <input
        type='text'
        placeholder='Enter Email'
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <input
        type='text'
        placeholder='Enter Phone No.'
        value={phoneNo}
        onChange={e => setPhoneNo(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type='password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <button>SignUp</button>
    </form>
  )
}
