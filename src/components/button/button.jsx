import { buttonStyle, buttonStyleOutline } from "./style.jsx";

import PropTypes from "prop-types";

export default function Button(props) {
  const { text, icon } = props;
  return (
    <button style={buttonStyle}>
      <span>{text}</span>
      {icon ? icon : null}
    </button>
  );
}

export function ButtonOutline(props) {
  const { text, icon } = props;
  return (
    <button style={buttonStyleOutline}>
      <span>{text}</span>
      {icon ? icon : null}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

ButtonOutline.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};
