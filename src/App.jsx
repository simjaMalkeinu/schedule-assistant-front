import { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar.jsx";
import Situations from "./components/situations/situations.jsx";
import EditIcon from "@mui/icons-material/Edit";

import { userSituation } from "./utils/kardex.jsx";
import CoursesList from "./components/list/CoursesList.jsx";
import { colorPalette } from "./utils/colorPalette.jsx";

function App() {
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    document.title = "Mapa Curricular";
    setUserCourses(userSituation.kardex)
  }, [userCourses]);

  const handleUpdate = (course = {}) => {
    console.log("actualizando datos del curso" + course.name)

  }

  return (
    <>
      <Sidebar />

      <div className="container">
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
            <Situations situationType={userSituation.userState} />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            style={{
              background: colorPalette.secondary,
              color: colorPalette.white,
              borderRadius: "5px",
            }}
            className="pl-4 pr-1 py-2 flex gap-3 items-center"
          >
            <span>Editar Kardex</span>
            <EditIcon sx={{ fontSize: "20px", color: colorPalette.white }} />
          </button>
          <div className="flex flex-col items-center mb-5 pr-4 gap-2">
            <span
              style={{ border: "solid 2px #035E63", borderRadius: "10px" }}
              className="px-10 py-2"
            >
              {userSituation.credits}
            </span>
            <p>Total de creditos</p>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <CoursesList
            kardex={userSituation.kardex}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
