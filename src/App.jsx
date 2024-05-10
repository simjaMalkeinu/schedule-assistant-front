import './App.css'

import Sidebar from './components/sidebar/sidebar.jsx'
import Button, {ButtonOutline} from './components/button/button.jsx'

import DownloadIcon from '@mui/icons-material/Download';
import Course, { CourseNoPassed, CoursePassed, CourseNoPassedOutline } from './components/course/course.jsx';

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

        <Course name="React desde cero, prueba de test"/>
        <CoursePassed name="React desde cero"/>
        <CourseNoPassed name="React desde cero, prueba de test"/>
        <CourseNoPassedOutline name="React desde cero, prueba de test"/>
      </div>
    </>
  )
}

export default App
