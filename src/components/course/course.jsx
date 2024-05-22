import PropTypes from "prop-types";
import {
  courseStyle,
  courseStyleOutline,
  courseStyleDisable,
  courseNoPassedStyleOutline,
} from "./style";

export default function Course(props) {
  const { name, tipo, update, course } = props;

  const handleClick = () => {
    if (update) {
      update(course);
    }
  }

  if (tipo === "passed") {
    return (
      <button style={courseStyle} onClick={handleClick}>
        {name}
      </button>
    );
  } else if (tipo === "noPassed") {
    return (
      <button
        style={courseNoPassedStyleOutline}
        onClick={handleClick}
      >
        {name}
      </button>
    );
  } else if (tipo === "disabled") {
    return <button style={courseStyleDisable}>{name}</button>;
  }

  return (
    <button style={courseStyleOutline} onClick={handleClick}>
      {name}
    </button>
  );
}

Course.propTypes = {
  name: PropTypes.string,
  tipo: PropTypes.string,
  update: PropTypes.func,
  course: PropTypes.object,
};
