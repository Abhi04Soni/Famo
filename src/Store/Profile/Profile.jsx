import React, { useContext } from 'react'
import { UserContext } from '../../contexts/Context'
import demoPost from '../../Assets/demoPost.jpg'
import './Profile.css'

export default function Profile () {
  const { user } = useContext(UserContext)
  return (
    <div className='Profile-container'>
      <div className='profile-Dis'>
        <div className='profile-Dis-header'>
          <div className='Profile-Name'>{user}</div>
          <img src={demoPost} alt='Profile Pitcher' />
        </div>
      </div>
      <div className='profile-posts'></div>
    </div>
  )
}
