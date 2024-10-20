import React from 'react'
import profile from '../../assets/demoPost.jpg'
import './ChatConnection.css'

export default function ChatConnections () {
  return (
    <div className='chatConnectionContainer'>
      <div className='connectionProfileLeft'>
        <img src={profile} className='profileConncetion' />
          </div>
          <div className='connectionProfileRight'>
          <div className="connectionProfileSender"> Sender</div>
          <div className="connectionProfileMsg"> Senders Message</div>
          <div className="connectionProfileTime">12:00 AM</div>     
          </div>
    </div>
  )
}
