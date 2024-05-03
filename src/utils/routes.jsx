// Desc: Roots of the application
// Date: 8/9/2019
// Auth: Simja

import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    }, {
        path: "/about",
        element: <div>About</div>
    }, {
        path: "/app",
        element: <App />
    }
])