import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import { UserProvider } from './contexts/Context.jsx'
import { ChatContextProvider } from './contexts/ChatContext.jsx'
import { Provider } from 'react-redux'
// import store from './redux/Store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
      <UserProvider>
        <ChatContextProvider>
          <Routes />
        </ChatContextProvider>
      </UserProvider>
    {/* </Provider> */}
  </StrictMode>
)
