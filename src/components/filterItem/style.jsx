import { colorPalette } from '../../utils/colorPalette'; // Add this import statement

export const filterItemStyles = {
    backgroundColor: colorPalette.white,
    width: "fit-content",
    padding: "10px 20px",
    borderRadius: "50px",
    margin: "10px 0",
    color: colorPalette.quaternary,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    border: `2px solid ${colorPalette.quaternary}`,
    fontWeight: "bold",
    gap: "10px",
}