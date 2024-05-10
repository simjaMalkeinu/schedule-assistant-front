import './App.css'

import Sidebar from './components/sidebar/sidebar.jsx'
import Button from './components/button/button.jsx'

function App() {

  return (
    <>
      <Sidebar />
      
      <div className="container">
        <h1>hola</h1>
        <Button text="guardar"/>
      </div>
    </>
  )
}

export default App
