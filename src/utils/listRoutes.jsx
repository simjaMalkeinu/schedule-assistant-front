import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GavelIcon from '@mui/icons-material/Gavel';

export const listRoutes = [
    {
        name: "Mapa curricular",
        path: "/mapa-curricular",
        icon: <AccountTreeIcon />,
    },
    {
        name: "Reglamento",
        path: "/reglamento",
        icon: <DonutSmallIcon />,
    },
    {
        name: "Generar horário",
        path: "/generar-horario",
        icon: <FactCheckIcon />,
    },
    {
        name: "Visualizar horário",
        path: "/visualizar-horario",
        icon: <GavelIcon />,
    }
];