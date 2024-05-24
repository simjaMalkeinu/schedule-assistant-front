import Course from "../course/course.jsx";
import { courses } from "../../utils/curricularMap.js";
import Modal from "../modal/Modal.jsx";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function CoursesList(props) {
  const { kardex, handleUpdate } = props;

  const [openM, setOpenM] = useState(0);
  const [dataM, setDataM] = useState({});

  useEffect(() => {}, [openM, dataM]);

  return (
    <>
      {[...courses].reverse().map((periodo) => {
        return (
          <div key={periodo.periodo} className="flex gap-4">
            {periodo.cursos.map((course, index) => {

              const indice = kardex.findIndex(
                (i) => i.idCourse === course.idCourse
              );

              const state = indice === -1 ? "" : kardex[indice].state;

              return (
                <Course
                  key={index + "-" + course.name}
                  course={course}
                  tipo={state}
                  clickFun={() => {
                    setOpenM(1);
                    setDataM({...course, state});
                  }}
                />
              );
            })}
          </div>
        );
      })}
      <Modal
        handleUpdate={handleUpdate}
        dataM={dataM}
        setDataM={setDataM}
        openM={openM}
        setOpenM={setOpenM}
      />
    </>
  );
}

CoursesList.propTypes = {
  kardex: PropTypes.arrayOf(PropTypes.object),
  handleUpdate: PropTypes.func,
};
