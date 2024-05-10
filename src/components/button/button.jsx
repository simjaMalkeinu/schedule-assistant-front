import { buttonStyle } from "./style.jsx";

import PropTypes from 'prop-types';

export default function Button(props) {
  const { text } = props;
  return (
    <button style={buttonStyle}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string
};