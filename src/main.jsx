import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import { UserProvider } from './contexts/Context.jsx'
import { ChatContextProvider } from './contexts/ChatContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ChatContextProvider>
        <Routes />
      </ChatContextProvider>
    </UserProvider>
  </StrictMode>
)
