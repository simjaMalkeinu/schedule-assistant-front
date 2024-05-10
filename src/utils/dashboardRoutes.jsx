// Desc: Roots of the application
// Date: 8/9/2019
// Auth: Simja

import { createBrowserRouter } from 'react-router-dom'
import CurricularMap from '../routes/dashboard/curricularMap.jsx'
import Regulation from '../routes/dashboard/regulation.jsx'
import ScheduleGenerate from '../routes/dashboard/scheduleGenerate.jsx'
import ScheduleView from '../routes/dashboard/scheduleView.jsx'

export const DashboardRoutes = createBrowserRouter([
    {
        path: "/",
        element: <CurricularMap />,
    }, {
        path: "/Regulation",
        element: <Regulation />
    }, {
        path: "/ScheduleGenerate",
        element: <ScheduleGenerate />
    }, {
        path: "/ScheduleView",
        element: <ScheduleView />
    }
])