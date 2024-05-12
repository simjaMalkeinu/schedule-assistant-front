import { colorPalette } from "../../utils/colorPalette.jsx";

export const buttonStyle = {
    width: "100%",
    maxWidth: "140px",
    backgroundColor: colorPalette.primary,
    color: colorPalette.white,
    padding: "10px 0",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontFamily: "Roboto condensed",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",

};

export const buttonStyleOutline = {
    width: "100%",
    maxWidth: "140px",
    backgroundColor: colorPalette.white,
    color: colorPalette.quaternary,
    padding: "10px 30px",
    borderRadius: "5px",
    border: "2px solid " + colorPalette.quaternary,
    cursor: "pointer",
    fontFamily: "Roboto condensed",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    gap: "5px",  
};