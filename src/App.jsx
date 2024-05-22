import { useEffect, useState } from "react";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar.jsx";
import Situations from "./components/situations/situations.jsx";

import { kardex } from "./utils/kardex.jsx";
import CoursesList from "./components/list/CoursesList.jsx";

function App() {
  const [userCourses, setUserCourses] = useState([...kardex]);

  useEffect(() => {
    document.title = "Mapa Curricular";
  }, [userCourses]);

  const handleUpdate = (course) => {
    
    // I want to update the userCourses state with the new course
    // this course could be passed or noPassed
    setUserCourses([...kardex])

    console.log("update", course);
  };

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
            <Situations situationType="Regulary" />
          </div>
        </div>

        <div className="flex flex-col items-end mb-5 pr-4">
          <span
            style={{ border: "solid 2px #035E63", borderRadius: "10px" }}
            className="px-10 py-2"
          >
            30%
          </span>
          <p>Total de creditos</p>
        </div>

        <div className="overflow-scroll">
          <CoursesList
            kardex={kardex}
            update={handleUpdate}
            modo="editar"
          />
        </div>
      </div>
    </>
  );
}

export default App;
