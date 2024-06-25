import Sidebar from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

import CoursesList from "../../components/list/CoursesList.jsx";
import { colorPalette } from "../../utils/colorPalette.jsx";
import EditIcon from "@mui/icons-material/Edit";

export default function ScheduleGenerate() {
  const [map, setMap] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    axios
      .get("http://localhost:3000/schedule/2020600020")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setMap(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="overflow-x-scroll">
          <h1 className="text-center text-3xl font-bold">MAPA CURRICULAR</h1>
          <div className="flex justify-between items-center">
            <button
              style={{
                background: colorPalette.secondary,
                color: colorPalette.white,
                borderRadius: "5px",
              }}
              className="pl-4 pr-1 py-2 flex gap-3 items-center"
            >
              <span>Preferencias de Horario</span>
              <EditIcon sx={{ fontSize: "20px", color: colorPalette.white }} />
            </button>
          </div>
          <CoursesList
            kardexList={map.kardex}
            view={"generate"}
            min={map.min_period}
            max={map.max_period}
          />
        </div>
      </div>
    </>
  );
}
