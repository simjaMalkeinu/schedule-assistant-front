import { colorPalette } from "../../utils/colorPalette";


export const courseStyle = {
    width: "100%",
    maxWidth: "150px",
    minWidth: "150px",
    minHeight: "70px",
    backgroundColor: colorPalette.primary,
    color: colorPalette.white,
    textAlign: "center",
    padding: "10px 5px",
    borderRadius: "5px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    border: "none"

};

export const courseStyleOutline = {
    width: "100%",
    maxWidth: "150px",
    minHeight: "70px",
    backgroundColor: colorPalette.white,
    color: colorPalette.primary,
    border: "2px solid " + colorPalette.terceary,
    textAlign: "center",
    padding: "10px 5px",
    borderRadius: "5px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",

};

export const courseNoPassedStyle = {
    width: "100%",
    maxWidth: "150px",
    minHeight: "70px",
    backgroundColor: colorPalette.danger,
    color: colorPalette.white,
    textAlign: "center",
    padding: "10px 5px",
    borderRadius: "5px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",

};

export const courseNoPassedStyleOutline = {
    width: "100%",
    maxWidth: "150px",
    minHeight: "70px",
    backgroundColor: colorPalette.white,
    color: colorPalette.danger,
    border: "2px solid " + colorPalette.danger,
    textAlign: "center",
    padding: "10px 5px",
    borderRadius: "5px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",

};