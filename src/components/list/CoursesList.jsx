import Course from "../course/course.jsx";
import Modal from "../modal/Modal.jsx";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function CoursesList(props) {
  const { handleUpdate, kardexList = [] } = props;

  const [openM, setOpenM] = useState(0);
  const [dataM, setDataM] = useState({});

  useEffect(() => {
  }, [openM, dataM]);

  

  return (
    <>
      {kardexList.map((periodo) => {
        return (
          <div key={"periodo-" + periodo.num} className="flex gap-4">
            {periodo.courses.map((course, index) => {
              return (
                <Course
                  key={index + "-" + course.name}
                  course={course}
                  clickFun={() => {
                    setOpenM(1);
                    setDataM({ ...course });
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
  // courses: PropTypes.array,
  handleUpdate: PropTypes.func,
  kardexList: PropTypes.array
};
