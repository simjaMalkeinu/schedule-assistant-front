import { buttonStyle, buttonStyleOutline } from "./style.jsx";

import PropTypes from "prop-types";

export default function Button(props) {
  const { text, icon, fun = () => {}, value } = props;
  return (
    <button
      style={buttonStyle}
      onClick={() => {
        value ? fun(value) : fun();
      }}
    >
      <span>{text}</span>
      {icon ? icon : null}
    </button>
  );
}

export function ButtonOutline(props) {
  const { text, icon, fun = () => {}, value } = props;
  return (
    <button
      style={buttonStyleOutline}
      onClick={() => {
        value ? fun(value) : fun();
      }}
    >
      <span>{text}</span>
      {icon ? icon : null}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  fun: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

ButtonOutline.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  fun: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};
