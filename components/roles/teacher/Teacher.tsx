import NextLink from "next/link";
import {
  Box,
  Card,
  styled,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Divider,
  DividerProps,
  CardHeader,
  Chip,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";

import {
  Chart as ChartJS,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip as TooltipChart,
  ChartData,
  ChartTypeRegistry,
} from "chart.js";
ChartJS.register(
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  TooltipChart
);
import { Chart } from "react-chartjs-2";
import moment from "moment";
import { useEffect, useState } from "react";

// Components
import { Progress } from "./components";
import { ModuleStudy } from "../../study";

// Icons
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Interfaces
import { ISubModulo } from "../../../interfaces";

// Redux
import { useAppSelector } from "../../../hooks";

const StyledDivider = styled((props: DividerProps) => {
  return <Divider {...props} />;
})(() => ({
  backgroundColor: "#c8d6e5",
}));

type TypeRange = "Básico" | "Intermedio" | "Avanzado" | null;

const Teacher = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { modulos } = useAppSelector((state) => state.study);

  const [currentSubmodule, setCurrentSubmodule] = useState<ISubModulo | null>(
    null
  );
  const { grades } = user;

  const [data, setData] = useState<ChartData<
    keyof ChartTypeRegistry,
    number[],
    string
  > | null>(null);

  const [visualizeNotes, setVisualizeNotes] = useState("");

  const [range, setRange] = useState<TypeRange>(null);
  useEffect(() => {
    if (!grades) {
      setRange("Básico");
      return;
    }
    if (grades?.module3) {
      setRange("Avanzado");
      return;
    }
    if (grades?.module3) {
      setRange("Intermedio");
      return;
    }
    if (grades?.module3) {
      setRange("Básico");
      return;
    }
  }, [grades]);

  useEffect(() => {
    if (grades) {
      let find: number;
      switch (range) {
        case "Básico":
          find = grades.module1.length;
          setCurrentSubmodule(
            modulos[0].content.filter((data, index) => index + 1 === find)[0]
          ); // setCurrentSubmodule
          break;
        case "Intermedio":
          find = grades.module2.length;
          setCurrentSubmodule(
            modulos[1].content.filter((data, index) => index + 1 === find)[0]
          );
          break;
        case "Avanzado":
          find = grades.module3.length;
          setCurrentSubmodule(
            modulos[2].content.filter((data, index) => index + 1 === find)[0]
          );
          break;
        default:
          find = 0;
          break;
      }
    }
  }, [grades, range, modulos]);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setVisualizeNotes(event.target.value);
  };

  useEffect(() => {
    if (grades) {
      switch (visualizeNotes) {
        case "module1":
          setData({
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [
              {
                type: "line" as const,
                label: "Nota",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                fill: false,
                data: grades.module1,
              },
              {
                type: "bar" as const,
                label: "Nota",
                backgroundColor: "rgb(75, 192, 192)",
                data: grades.module1,
                borderColor: "white",
                borderWidth: 2,
              },
              {
                type: "bar" as const,
                label: "Nota",
                backgroundColor: "rgb(53, 162, 235)",
                data: grades.module1,
              },
            ],
          });
          break;
        case "module2":
          setData({
            labels: ["1", "2", "3", "4"],
            datasets: [
              {
                type: "line" as const,
                label: "Dataset 1",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                fill: false,
                data: grades.module2,
              },
              {
                type: "bar" as const,
                label: "Dataset 2",
                backgroundColor: "rgb(75, 192, 192)",
                data: grades.module2,
                borderColor: "white",
                borderWidth: 2,
              },
              {
                type: "bar" as const,
                label: "Dataset 3",
                backgroundColor: "rgb(53, 162, 235)",
                data: grades.module2,
              },
            ],
          });
          break;
        case "module3":
          setData({
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [
              {
                type: "line" as const,
                label: "Dataset 1",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
                fill: false,
                data: grades.module3,
              },
              {
                type: "bar" as const,
                label: "Dataset 2",
                backgroundColor: "rgb(75, 192, 192)",
                data: grades.module3,
                borderColor: "white",
                borderWidth: 2,
              },
              {
                type: "bar" as const,
                label: "Dataset 3",
                backgroundColor: "rgb(53, 162, 235)",
                data: grades.module3,
              },
            ],
          });
          break;
        default:
        case "module1":
          setData(null);
          break;
          break;
      }
    }
  }, [visualizeNotes, grades]);

  return (
    <>
      <Box sx={{ p: 2, mb: 2, position: "relative" }}>
        <Typography variant="h6" fontWeight={400} fontSize={15}>
          Dashboard
        </Typography>
        <Typography variant="h5" fontWeight={800}>
          Resumen
        </Typography>
        <Typography
          variant="body1"
          fontWeight={400}
          sx={{ position: "absolute", top: 0, right: 0, m: 2 }}
        >
          {moment(Date.now()).utc().format("DD/MM/YYYY")}
        </Typography>
      </Box>
      <Box
        sx={{ p: 2, width: "100%" }}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box sx={{ width: "100%", mb: 1 }}>
          <Typography variant="h6" fontWeight={400} fontSize={15}>
            Progreso en capacitación
          </Typography>
        </Box>
        <StyledDivider variant="fullWidth" sx={{ mb: 2 }} />
        <Progress grades={grades} name={user.name} />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        sx={{ width: "100%", p: 2 }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" fontWeight={400} fontSize={15}>
            Proceso de capacitación
          </Typography>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>
            Continuar aprendizaje
          </Typography>
          <StyledDivider variant="fullWidth" sx={{ mb: 2 }} />
        </Box>
        <Box sx={{ width: "45%" }}>
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={15}
            sx={{ mb: 2 }}
          >
            Dejaste tu progreso acá
          </Typography>
          {currentSubmodule ? (
            <Card
              sx={{
                height: "fit-content",
                backgroundColor: "#112233ff",
                mb: 2,
              }}
            >
              <CardHeader
                avatar={
                  <Chip
                    label={`${
                      currentSubmodule.exp + currentSubmodule.test.exp
                    } exp`}
                    icon={<StarIcon />}
                    color="success"
                    size="small"
                  />
                }
                title={`${currentSubmodule.name}`}
                subheader={`${currentSubmodule.time} minutos • ${currentSubmodule.modulo}`}
                action={
                  <NextLink
                    href={`/home/learn/${currentSubmodule.to}`}
                    passHref
                  >
                    <Tooltip title="Ir">
                      <IconButton>
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Tooltip>
                  </NextLink>
                }
              />
            </Card>
          ) : (
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                No tienes progresos guardados, comienza a aprender ya
              </Typography>
              <NextLink href={`/home/learn/1-introduction`} passHref>
                <Button color="success" variant="contained" sx={{ mb: 1 }}>
                  Comenzar
                </Button>
              </NextLink>
            </Box>
          )}
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={15}
            sx={{ mb: 2 }}
          >
            Analiza tu progreso
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{
              width: "100%",
              color: "black",
              backgroundImage: "linear-gradient(to right, #141e30, #243b55)",
              borderEndEndRadius: 3,
              borderStartEndRadius: 3,
              p: 0.4,
              boxSizing: "border-box",
            }}
          >
            <FormControl
              sx={{
                m: 2,
                minWidth: 120,
              }}
              size="small"
            >
              <InputLabel id="demo-select-small">Módulo</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={visualizeNotes}
                label="Módulo"
                onChange={handleChangeSelect}
              >
                <MenuItem value="" disabled>
                  <em>Seleccionar</em>
                </MenuItem>
                <MenuItem value={"module1"}>Módulo 1</MenuItem>
                <MenuItem value={"module2"}>Módulo 2</MenuItem>
                <MenuItem value={"module3"}>Módulo 3</MenuItem>
              </Select>
            </FormControl>
            <Box>{data && <Chart type="bar" data={data} />}</Box>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>
            Explorar módulos
          </Typography>
          <ModuleStudy modulos={modulos} />
        </Box>
      </Box>
    </>
  );
};

export { Teacher };
