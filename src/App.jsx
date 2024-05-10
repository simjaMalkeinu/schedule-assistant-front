import './App.css'

import Sidebar from './components/sidebar/sidebar.jsx'
import Button, {ButtonOutline} from './components/button/button.jsx'

import DownloadIcon from '@mui/icons-material/Download';

function App() {

  return (
    <>
      <Sidebar />
      
      <div className="container">
        <h1>Componentes</h1>
        <Button text="Guardar"/>
        <Button text="Descargar" icon=<DownloadIcon />  />
        <ButtonOutline text="Cancelar"/>
        <ButtonOutline text="Cancelar" icon=<DownloadIcon />/>
      </div>
    </>
  )
}

export default App
