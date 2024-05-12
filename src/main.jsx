import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { routes } from './utils/routes.jsx'

import '@fontsource/roboto-condensed';
import "@fontsource/roboto-condensed/700.css"
import "@fontsource/roboto-condensed/300.css"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
