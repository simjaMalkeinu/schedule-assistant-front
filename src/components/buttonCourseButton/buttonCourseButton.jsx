import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SignpostIcon from "@mui/icons-material/Signpost";
import { buttonCourseButtonClick, buttonCourseButtonStyles } from "./styles";
import { useEffect, useState } from "react";
import { colorPalette } from "../../utils/colorPalette";

export default function ButtonCourseButton(props) {
  const { action = 0, activate = false, handleChange } = props;

  const [clicked, setClicked] = useState(false);

  useEffect(()=> {
    setClicked(activate)
  }, [activate])

  const handleClick = () => {

    if (action === "passed") {
      handleChange(1)
    }
    if (action === "no-passed") {
      handleChange(0)
    }
    if (action === 0) {
      handleChange(null)
    }
  };

  const checkCourseButtonPassed = (
    <button
      onClick={handleClick}
      style={!clicked ? buttonCourseButtonStyles : {...buttonCourseButtonClick, color: colorPalette.primary}}
    >
      <CheckCircleOutlineIcon sx={{ fontSize: 100 }} />
      <span>Aprobada</span>
    </button>
  );

  const checkCourseButtonNoPassed = (
    <button
      onClick={handleClick}
      style={!clicked ? buttonCourseButtonStyles : {...buttonCourseButtonClick, color: colorPalette.danger}}
    >
      <HighlightOffIcon sx={{ fontSize: 100 }} />
      <span>Reprobada</span>
    </button>
  );

  const checkCourseButtonDefault = (
    <button
      onClick={handleClick}
      style={!clicked ? buttonCourseButtonStyles : {...buttonCourseButtonClick, color: colorPalette.terceary}}
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
  activate: PropTypes.bool,
  handleChange: PropTypes.func
};
