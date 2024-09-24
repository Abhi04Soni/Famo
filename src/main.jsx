import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import { UserProvider } from './contexts/Context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </StrictMode>
)
