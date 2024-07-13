import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'
import { SocketProvider } from './context/SocketProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <SocketProvider>
      <Auth0Provider
      domain="dev-6dk8yyzpc3ogban1.us.auth0.com"
      clientId="d8qaMM2jubQ6p3xg9OEB7lFlZPoFQuoW"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
        <App />
      </Auth0Provider>
    </SocketProvider>
  </>
)
