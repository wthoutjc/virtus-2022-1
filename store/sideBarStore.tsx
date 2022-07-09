// Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuBookIcon from '@mui/icons-material/MenuBook';

//Interfaces
import { SideBarData } from "../interfaces";

const AdminSideBarStore: SideBarData[] = [
  {
    to: "/home/account",
    title: "Account",
    Icon: <AccountBoxIcon />,
  },
  {
    to: "/home/optionADMIN1",
    title: "Option1",
    Icon: <AddBoxIcon />,
  },
  {
    to: "/home/optionADMIN2",
    title: "Option2",
    Icon: <AddBoxIcon />,
  },
  {
    to: "/home/optionADMIN3",
    title: "Option3",
    Icon: <AddBoxIcon />,
  },
  {
    to: "/home/optionADMIN4",
    title: "Option4",
    Icon: <AddBoxIcon />,
  },
];

const TeacherSideBarStore: SideBarData[] = [
  {
    to: "/home/account",
    title: "Cuenta",
    Icon: <AccountBoxIcon />,
  },
  {
    to: "/home/learn",
    title: "Estudiar",
    Icon: <SchoolIcon />,
  },
  {
    to: "/home/stats",
    title: "Estadísticas",
    Icon: <BarChartIcon />,
  },
  {
    to: "/home/guide",
    title: "Guía",
    Icon: <MenuBookIcon />,
  },
];

export { AdminSideBarStore, TeacherSideBarStore };
