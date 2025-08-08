import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PackageProvider } from './assets/context/PackageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PackageProvider>
        <App />
      </PackageProvider>
  </React.StrictMode>,
)
