import { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar.jsx";
import Situations from "./components/situations/situations.jsx";
import WarningIcon from "@mui/icons-material/Warning";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import axios from "axios";
import CoursesList from "./components/list/CoursesList.jsx";
import { colorPalette } from "./utils/colorPalette.jsx";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    document.title = "Mapa Curricular";
  }, []);

  const handleUpdate = (course = {}) => {
    console.log("actualizando datos del curso" + course.name);
    console.log("del estado" + course.state);
    console.log("al estado" + course.newState);

    if (course.state !== course.newState) {
      axios
        .put("http://localhost:3000/courses/update/2020600020", {
          curso: course.idcourse,
          state: course.newState,
        })
        .then((res) => console.log(res))
        .catch()
        .finally(() => {
          getAllCourses();
        });
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    axios
      .get("http://localhost:3000/courses/2020600020")
      .then((response) => response.data)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Sidebar />

      <div className="container" style={{ maxWidth: "100%" }}>
        <h1 className="text-center text-3xl font-bold">MAPA CURRICULAR</h1>

        <div className="flex justify-between mb-5">
          <div className="flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <i
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#3B6367",
                  borderRadius: "12px",
                }}
              ></i>
              <p>U.A. Aprobada</p>
            </div>
            <div className="flex gap-4 items-center">
              <i
                style={{
                  width: "40px",
                  height: "40px",
                  border: "solid 2px #3B6367",
                  borderRadius: "12px",
                }}
              ></i>

              <span>U.A. No cursada</span>
            </div>
            <div className="flex gap-4 items-center">
              <i
                style={{
                  width: "40px",
                  height: "40px",
                  border: "solid 2px #8B3833",
                  borderRadius: "12px",
                }}
              ></i>

              <span>U.A. Reprobada</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p style={{ minWidth: "fit-content" }}>Situacion academica</p>
            <Situations situationType={userData.student_state} />
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* <button
            style={{
              background: colorPalette.secondary,
              color: colorPalette.white,
              borderRadius: "5px",
            }}
            className="pl-4 pr-1 py-2 flex gap-3 items-center"
          >
            <span>Editar Kardex</span>
            <EditIcon sx={{ fontSize: "20px", color: colorPalette.white }} />
          </button> */}

          <ul className="flex flex-col gap-2 items-start">
            {userData.percentage_credits < 50 ? (
              <li className="text-yellow-600 flex justify-center items-center gap-3">
                <WarningIcon />{" "}
                <strong>No puedes aplicar a las Practicas profesionales</strong>
              </li>
            ) : (
              <li className="text-yellow-600 flex justify-center items-center gap-3">
                <DoneAllIcon />{" "}
                <strong>Puedes aplicar a las Practicas profesionales</strong>
              </li>
            )}
            {userData.percentage_credits < 70 ? (
              <li className="text-yellow-600 flex justify-center items-center gap-3">
                <WarningIcon />{" "}
                <strong>No puedes aplicar a servicio social</strong>
              </li>
            ) : (
              <li className="text-yellow-600 flex justify-center items-center gap-3">
                <DoneAllIcon />{" "}
                <strong>Puedes aplicar a servicio social</strong>
              </li>
            )}
          </ul>
          <div className="flex flex-col items-center mb-5 pr-4 gap-2">
            <span
              style={{
                border: "solid 2px #035E63",
                borderRadius: "10px",
                color: colorPalette.primary,
              }}
              className="px-10 py-2 font-bold"
            >
              {userData.percentage_credits + "%"}
            </span>
            <p>Total de creditos</p>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <CoursesList
            handleUpdate={handleUpdate}
            kardexList={userData.kardex}
            view={"view"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
