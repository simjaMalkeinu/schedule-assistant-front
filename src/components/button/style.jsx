import { colorPalet } from "../../utils/colorPalet.jsx";

export const buttonStyle = {
    width: "100%",
    maxWidth: "140px",
    backgroundColor: colorPalet.primary,
    color: colorPalet.white,
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
};

export const buttonStyleOutline = {
    width: "100%",
    maxWidth: "140px",
    backgroundColor: colorPalet.white,
    color: colorPalet.quaternary,
    padding: "10px 30px",
    borderRadius: "5px",
    border: "2px solid " + colorPalet.quaternary,
    cursor: "pointer",
    fontFamily: "Roboto condensed",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",  
};