// Desc: Roots of the application
// Date: 8/9/2019
// Auth: Simja

import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Login from '../routes/home/login.jsx'
import Register from '../routes/home/register.jsx'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    }, {
        path: "/register",
        element: <Register />
    }, {
        path: "/app",
        element: <App />
    }
])