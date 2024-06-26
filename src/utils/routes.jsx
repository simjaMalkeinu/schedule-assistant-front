// Desc: Roots of the application
// Date: 8/9/2019
// Auth: Simja

import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../routes/home/login.jsx";
import Register from "../routes/home/register.jsx";
import Regulation from "../routes/dashboard/regulation.jsx";
import ScheduleGenerate from "../routes/dashboard/scheduleGenerate.jsx";
import ScheduleView from "../routes/dashboard/scheduleView.jsx";
import Components from "../routes/home/Components.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/Regulation",
    element: <Regulation />,
  },
  {
    path: "/ScheduleGenerate",
    element: <ScheduleGenerate />,
  },
  {
    path: "/ScheduleView",
    element: <ScheduleView />,
  },
  {
    path: "/Components",
    element: <Components />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
