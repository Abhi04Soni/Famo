import React from 'react'
import ChatBubble from '../../Components/ChatComponents/ChatBubble'
import './ChatMainScreen.css'
import { useState } from 'react'
import axios from 'axios'


export default function ChatsMainScreen () {
  const [text, setText] = useState('')

  const chatHandler = e => {
    console.log('Inside chatHandler function', text)
    setText('')
    e.preventDefault()

    const resp = axios.post('http://localhost:3000/signup', {
        text,

    }
    )
  }

  return (
    <div className='ChatsMainContainer'>
      <div className='ChatTop'>
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
      </div>
      <div className='ChatBottom'>
        <button className='ChatAttachment'>Attach</button>
        <input
          type='text'
          className='ChatInput'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='ChatSend' onClick={() => chatHandler}>
          Send
        </button>
      </div>
    </div>
  )
}
