import React from 'react'
import './ChatBubble.css'

export default function ChatBubble() {
  return (
      <div className='ChatBubbleContainer'>
          <div className="ChatBubbleSender"> Sender</div>
          <div className="ChatBubbleMsg"> Senders Message</div>
          <div className="ChatBubbleTime">12:00 AM</div>      
      </div>
  )
}
