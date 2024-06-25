import Sidebar from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

import CoursesList from "../../components/list/CoursesList.jsx";
import Loader from "../../components/loader/Loader.jsx";
import Preferences from "../../components/preferencesModal/Preferences.jsx";
import ListPreferences from "../../components/listPreferences/ListPreferences";
import ScheduleView from "./scheduleView.jsx";

export default function ScheduleGenerate() {
  const [map, setMap] = useState([]);
  const [preferences, setPreferences] = useState({});
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    getAllCourses();
    document.getElementById("View").hidden = true;
  }, []);

  useEffect(() => {}, [preferences]);

  const getAllCourses = () => {
    axios
      .get("http://localhost:3000/schedule/2020600020")
      .then((response) => response.data)
      .then((data) => {
        setMap(data);

        let others = [];
        let prioritary = [];

        data.kardex
          .filter((p) => p.num >= data.min_period && p.num <= data.max_period)
          .forEach((p) => {
            p.courses.forEach((c) => {
              if (c.state === 0) {
                prioritary.push(c.idcourse);
              }
              if (c.state === null) {
                others.push(c.idcourse);
              }
            });
          });

        setPreferences({
          carga: null,
          turno: null,
          cultural_act: null,
          deportive_act: null,
          free_time: null,
          ss_time: null,
          pp_time: null,
          w_time: null,
          list_courses: { prioritary, others },
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("termino la peticion");
        document.getElementById("loader").hidden = true;
      });
  };

  const getSchedules = () => {
    document.getElementById("generar-horario-map").hidden = true;

    axios
      .post("http://localhost:3000/schedule/2020600020", preferences)
      .then((res) => res.data)
      .then((data) => {
        setHorarios(data.horarios);
        document.getElementById("generar-horario-map").hidden = true;
        document.getElementById("View").hidden = false;
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Sidebar />

      <div
        className="overflow-x-scrlol"
        style={{ width: "100%" }}
        id="generar-horario-map"
      >
        <div className="container" style={{ maxWidth: "100%" }}>
          <h1 className="text-center text-3xl font-bold">MAPA CURRICULAR</h1>
          <Preferences
            ss_state={map.social_service}
            pp_state={map.practice_program}
            handleUpdate={setPreferences}
            preferences={preferences}
          />

          <ListPreferences list={preferences} />

          <button onClick={getSchedules}>Generar horarios</button>

          <Loader />

          <CoursesList
            kardexList={map.kardex}
            view={"generate"}
            min={map.min_period}
            max={map.max_period}
          />
        </div>
      </div>

      <div id="View" className="container" style={{ width: "100%" }}>
        <ScheduleView
          horarios={horarios}
          list={
            preferences.list_courses
          }
        />
      </div>
    </>
  );
}
