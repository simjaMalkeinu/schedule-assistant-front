import { colorPalet } from "../../utils/colorPalet.jsx";

export const sidebarStyle = {
    backgroundColor: colorPalet.primary,
    color: colorPalet.white,
    height: "100%",
    width: "300px",
    overflowX: "hidden",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
  };

export const sidebarListStyle = { 
    flex: "1",
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    paddingTop: "20px",
    gap: "20px",
    listStyleType: "none",
    margin: "0",
 };

export const sidebarListItemStyle = { 
    padding: "10px",
    color: colorPalet.white,
    textDecoration: "none",
    borderRadius: "5px",
    transition: "0.3s",
 };

export const sidebarListItemLink = {
    color: colorPalet.quinary,
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "regular",
    display: "flex",
    gap: "10px",
};