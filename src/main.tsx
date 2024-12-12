import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './app-routes'
import { Auth0ProviderWithNevigate } from './auth/auth0ProviderwithNevigate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Router>
      <Auth0ProviderWithNevigate>
        <AppRoutes />
      </Auth0ProviderWithNevigate>
      
    </Router>
  </StrictMode>,
)
