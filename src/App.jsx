import './App.css'

import Sidebar from './components/sidebar/sidebar.jsx'
import Button, {ButtonOutline} from './components/button/button.jsx'

import DownloadIcon from '@mui/icons-material/Download';
import Course, { CourseNoPassed, CoursePassed, CourseNoPassedOutline } from './components/course/course.jsx';
import Checkbox from './components/checkbox/checkbox.jsx';
import Situations from './components/situations/situations.jsx';
import FilterItem from './components/filterItem/filterItem.jsx';

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

        <Checkbox text="Carga minima"/>

        <Situations situationType="Regulary"/>
        <Situations situationType="No Regulary"/>
        <Situations situationType="Dictaminary"/>

        <FilterItem text="Carga minima"/>
      </div>
    </>
  )
}

export default App
