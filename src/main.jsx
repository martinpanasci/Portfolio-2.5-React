import * as Sentry from "@sentry/react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { LanguageProvider } from './context/LanguageContext'

// Inicializás Sentry con el DSN que te dieron
Sentry.init({
  dsn: "https://f8dc2af93af4a06708bf1bdbe27cc98e@o4590154302131024.ingest.us.sentry.io/4590154302951424",
  integrations: [], // podés agregar `BrowserTracing()` si querés medir performance
  tracesSampleRate: 1.0,
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
