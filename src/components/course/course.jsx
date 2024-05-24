import PropTypes from "prop-types";
import {
  courseStyle,
  courseStyleOutline,
  courseStyleDisable,
  courseNoPassedStyleOutline,
} from "./style";

export default function Course(props) {
  const { tipo, clickFun, course } = props;

  const getStyle = () => {
    if (tipo === "passed") {
      return courseStyle;
    } else if (tipo === "noPassed") {
      return courseNoPassedStyleOutline;
    } else if (tipo === "disabled") {
      return courseStyleDisable;
    }
    return courseStyleOutline;
  };

  const styleCourse = getStyle();

  return (
    <button style={styleCourse} onClick={() => clickFun()}>
      {course.name}
    </button>
  );
}

Course.propTypes = {
  tipo: PropTypes.string,
  clickFun: PropTypes.func,
  course: PropTypes.object,
};
