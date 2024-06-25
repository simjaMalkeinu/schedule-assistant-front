import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GavelIcon from '@mui/icons-material/Gavel';

export const listRoutes = [
    {
        name: "Mapa curricular",
        path: "/app",
        icon: <AccountTreeIcon />,
    },
    {
        name: "Reglamento",
        path: "/Regulation",
        icon: <DonutSmallIcon />,
    },
    {
        name: "Generar horário",
        path: "/ScheduleGenerate",
        icon: <FactCheckIcon />,
    },
    {
        name: "Visualizar horário",
        path: "/ScheduleView",
        icon: <GavelIcon />,
    }
];