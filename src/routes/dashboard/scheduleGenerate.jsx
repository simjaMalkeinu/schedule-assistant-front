import Sidebar from "../../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

import {} from "materialize-css";

import CoursesList from "../../components/list/CoursesList.jsx";
import Loader from "../../components/loader/Loader.jsx";
import Preferences from "../../components/preferencesModal/Preferences.jsx";

export default function ScheduleGenerate() {
  const [map, setMap] = useState([]);
  const [preferences, setPreferences] = useState({});

  useEffect(() => {
    getAllCourses();
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
          carga: 0,
          turno: "",
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

  return (
    <>
      <Sidebar />

      <div className="overflow-x-scrlol" style={{ width: "100%" }}>
        <div className="container" style={{ maxWidth: "100%" }}>
          <h1 className="text-center text-3xl font-bold">MAPA CURRICULAR</h1>
          <Preferences
            ss_state={map.social_service}
            pp_state={map.practice_program}
            handleUpdate={setPreferences}
            preferences={preferences}
          />

          <Loader />

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
