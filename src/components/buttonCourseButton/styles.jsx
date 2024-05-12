import { colors } from '@mui/material';
import { colorPalette } from '../../utils/colorPalette.jsx'; // Import the 'colorPalette' variable from the appropriate file

export const buttonCourseButtonStyles = {
    background: "none",
    border: "none",
    width: "fit-content",
    padding: "10px 20px",
    color: colors.grey[500],
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
    gap: "10px",
    fontSize: "20px",
}

export const buttonCourseButtonClick = {
    background: "none",
    border: "none",
    width: "fit-content",
    padding: "10px 20px",
    color: colorPalette.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "bold",
    gap: "10px",
    fontSize: "20px",

}