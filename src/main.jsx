import * as Sentry from "@sentry/react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { LanguageProvider } from './context/LanguageContext'

// Inicializás Sentry con el DSN que te dieron
Sentry.init({
  dsn: "https://07e8f76abb82c0f910c4e03f35f17357@o4509154301313024.ingest.us.sentry.io/4509154528133120"
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
