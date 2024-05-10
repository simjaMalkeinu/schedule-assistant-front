import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sidebar from './components/sidebar.jsx'
import { DashboardRoutes } from './utils/dashboardRoutes.jsx'

import { RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>App.jsx</code> and save to test Vite + React.
        </p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
      <Sidebar />
      <RouterProvider router={CurricularMap} />
    </>
  )
}

export default App
