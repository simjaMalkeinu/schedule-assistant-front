import PropTypes from "prop-types";
import {
  courseStyle,
  courseStyleOutline,
  courseStyleDisable,
  courseNoPassedStyleOutline,
} from "./style";

export default function Course(props) {
  const {clickFun, course } = props;

  const getStyle = () => {
    if (course.state === 1) {
      return courseStyle;
    } else if (course.state === 0) {
      return courseNoPassedStyleOutline;
    } else if (course.state === null) {
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
