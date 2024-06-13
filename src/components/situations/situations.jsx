import PropTypes from "prop-types";
import {
  situationsStyles,
  situationsStylesDictaminary,
  situationsStylesNoRegulary,
} from "./styes";

export default function Situations(props) {
  const { situationType, num = 0 } = props;
  if (situationType === "REGULAR") {
    return regulary;
  }
  if (situationType === "IRREGULAR") {
    return noRegulary;
  }
  if (situationType === "Dictaminary") {
    return dictaminary(num);
  }

  return <div style={situationsStyles}>Situacion</div>;
}

const regulary = <div style={situationsStyles}>Regulary</div>;
const noRegulary = <div style={situationsStylesNoRegulary}>Irregular</div>;
const dictaminary = (num) => {
  return <div style={situationsStylesDictaminary}>Dictamen {num}</div>;
};

Situations.propTypes = {
  situationType: PropTypes.string,
  num: PropTypes.number,
};
