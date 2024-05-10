import { useState } from "react";

import PropTypes from "prop-types";

import "./style.cbox.css";

export default function Checkbox(props) {
  const { text } = props;

  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        className="check-box"
        id="cbox"
      />
      <label htmlFor="cbox">{text}</label>
    </div>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
};
