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
              const styleOption = () => {
                const index = kardex.findIndex(
                  (i) => i.idCourse === course.idCourse
                );
                if (index === -1) {
                  return "";
                }
                return kardex[index].state;
              };

              return (
                <Course
                  key={index + "-" + course.name}
                  course={course}
                  tipo={styleOption()}
                  clickFun={() => {
                    setOpenM(1);
                    setDataM(course);
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
