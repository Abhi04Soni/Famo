import React from 'react'
import ChatBubble from '../../Components/ChatComponents/ChatBubble'
import './ChatMainScreen.css'
import { useState, useContext } from 'react'
import axios from 'axios'
import DateTime from '../../Components/DateTime'
import { UserContext } from '../../contexts/Context'
import ChatConnections from '../../Components/ChatComponents/ChatConnections'

export default function ChatsMainScreen () {
  const { user } = useContext(UserContext)
  const [text, setText] = useState('')

  const chatHandler = e => {
    console.log('Inside chatHandler function', text)
    setText('')
    e.preventDefault()
    let time = DateTime()
    console.log('Current time', time)

    try {
      const resp = axios.post('http://localhost:3000/chat', {
        user,
        text,
        time
      })

      if (resp) {
        //   console.log('Chat sent successfully')
        if (resp.response == 'ok') {
          console.log('Chat sent successfully')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='ChatsMainContainer'>
          <div className='chatMainConnections'>
              <ChatConnections />
              <ChatConnections />
              <ChatConnections />
                  
      </div>
      <div className='chatMainChats'>
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
    </div>
  )
}
