import Course from "../course/course.jsx";
import { courses } from "../../utils/curricularMap.js";
import Modal from "../modal/Modal.jsx";
import PropTypes from "prop-types";

export default function CoursesList(props) {
  const { kardex, update } = props;

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
                  key={index}
                  course={course}
                  name={course.name}
                  tipo={styleOption()}
                />
              );
            })}
          </div>
        );
      })}
      <Modal update={update}/>
    </>
  );
}

CoursesList.propTypes = {
  kardex: PropTypes.arrayOf(PropTypes.object),
  update: PropTypes.func,
};

// periodo.cursos.map((course, index) => {
//   return <Course
//     key={index}
//     course={course}
//     name={course.name}
//     update={update}
//   />;
