import { colorPalette } from "../../utils/colorPalette.jsx";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  sidebarStyle,
  sidebarListStyle,
  sidebarListItemStyle,
  sidebarListItemLink,
} from "./style.jsx";

import { listRoutes } from "../../utils/listRoutes.jsx";

export default function Sidebar() {
  return (
    <nav style={sidebarStyle}>
      {/* user data */}
      <div
        style={{
          display: "grid",
          gap: "10px",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "0 auto",
          }}
        />
        <p
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: colorPalette.quinary,
          }}
        >
          Simja Coto
        </p>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>2020600020</p>
      </div>
      <hr style={{width: "70%", margin: "0 auto", borderColor: colorPalette.terceary}}/>

      {/* sidebar list */}
      <ul style={sidebarListStyle}>
        {listRoutes.map((route, index) => {
          return (
            <li key={index} style={sidebarListItemStyle}>
              <a href={route.path} style={sidebarListItemLink}>
                {route.icon}
                <span>{route.name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* close session */}
      <div className="nav_close_session">
        <a href="">
          Cerrar sesión
          <LogoutIcon sx={{ fontSize: 40 }} />
        </a>
      </div>
    </nav>
  );
}
