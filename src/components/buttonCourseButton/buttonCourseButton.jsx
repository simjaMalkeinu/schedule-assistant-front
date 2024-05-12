import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SignpostIcon from "@mui/icons-material/Signpost";
import { buttonCourseButtonClick, buttonCourseButtonStyles } from "./styles";
import { useState } from "react";

export default function ButtonCourseButton(props) {
  const { action } = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const checkCourseButtonPassed = (
    <button
      onClick={handleClick}
      style={!clicked ? buttonCourseButtonStyles : buttonCourseButtonClick}
    >
      <CheckCircleOutlineIcon sx={{ fontSize: 100 }} />
      <span>Aprobada</span>
    </button>
  );

  const checkCourseButtonNoPassed = (
    <button
      onClick={handleClick}
      style={!clicked ? buttonCourseButtonStyles : buttonCourseButtonClick}
    >
      <HighlightOffIcon sx={{ fontSize: 100 }} />
      <span>Reprobada</span>
    </button>
  );

  const checkCourseButtonDefault = (
    <button
      onClick={handleClick}
      style={!clicked ? buttonCourseButtonStyles : buttonCourseButtonClick}
    >
      <SignpostIcon sx={{ fontSize: 100 }} />
      <span>No Cursada</span>
    </button>
  );

  if (action === "passed") {
    return checkCourseButtonPassed;
  }

  if (action === "no-passed") {
    return checkCourseButtonNoPassed;
  }

  return checkCourseButtonDefault;
}

ButtonCourseButton.propTypes = {
  action: PropTypes.string,
};
