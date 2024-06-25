import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import "./style.cbox.css";

export default function Checkbox(props) {
  const { text, id, valor, update,dato } = props;

  const [checked, setChecked] = useState(false);

  useEffect(()=> {
    if (dato === valor) {
      setChecked(true)
    } else{
      setChecked(false)
    }
  }, [dato])

  const handleCheck = () => {
    setChecked(!checked);
    if (checked === false) {
      update(valor);
    }
  };

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
        className="check-box"
        id={`cbox-${id}`}
      />
      <label htmlFor={`cbox-${id}`}>{text}</label>
    </div>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  valor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  update: PropTypes.func,
};
