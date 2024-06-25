import { colorPalette } from "../../utils/colorPalette";
import { filterItemStyles } from "./style";
import PropTypes from "prop-types";

import CancelIcon from "@mui/icons-material/Cancel";

export default function FilterItem(props) {
  const { text } = props;
  return (
    <div style={filterItemStyles}>
      <span>{text}</span>
      {/* <CancelIcon sx={{ color: colorPalette.quaternary }} /> */}
    </div>
  );
}

FilterItem.propTypes = {
  text: PropTypes.string,
};
