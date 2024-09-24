import React, { useEffect, useState, useContext } from 'react'
import './Login.css'
import axios from 'axios'
import { UserContext } from '../../contexts/Context'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logedin, setLogedin] = useState(false)

  const { user, setUser } = useContext(UserContext);

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:3000/login', {
      email: email,
      password: password
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      console.log('Login successful');
      
      setLogedin(true);
      setUser(email);

      const dashboardResponse = await axios.get('http://localhost:3000/dashboard', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      console.log('Dashboard data:', dashboardResponse.headers);
      console.log('Dashboard data:', dashboardResponse.data);
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

useEffect(() => {
  async function checkToken() {
    console.log('Checking token status...');
    if (logedin) {
      try {
        const dashboardResponse = await axios.get('http://localhost:3000/dashboard', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        });

        console.log('Dashboard data:', dashboardResponse.data);
        setUser(email);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    }
  }

  checkToken();
}, [logedin, email, setUser]);


  return (
    <form className='Login-container' onSubmit={handleLogin}>
      <div>Login Page</div>
      <div className='Image'></div>
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
      <button>LogIn</button>
    </form>
  )
}
