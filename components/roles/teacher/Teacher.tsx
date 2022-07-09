import {
  Box,
  Card,
  CardProps,
  CardContent,
  styled,
  Typography,
  Paper,
  PaperProps,
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
} from "@mui/material";
import Image from "next/image";

import {
  Chart as ChartJS,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip as TooltipChart,
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
import { Doughnut, Chart } from "react-chartjs-2";
import moment from "moment";
import { useState } from "react";

// Components
import { CustomizedSteppers } from "./components";
import { ModuleStudy } from "../../study";

// Icons
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OPTIONS = {
  cutout: 55,
  responsive: true,
};

const doughnoutData = {
  labels: ["Falta", "Alcanzado"],
  datasets: [
    {
      label: "% Learned",
      data: [12, 88],
      backgroundColor: ["#243b55", "#00d46a63"], // Falta - Alcanzado
      borderColor: ["#243b55", "#10d46a"],
      borderWidth: 1,
    },
  ],
};

const labels = ["January", "February", "March", "April", "May"];

const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [1, 2, 3, 4, 5],
    },
    {
      type: "bar" as const,
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: [1, 2, 3, 4, 5],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as const,
      label: "Dataset 3",
      backgroundColor: "rgb(53, 162, 235)",
      data: [1, 2, 3, 4, 5],
    },
  ],
};

const RCard = styled((props: CardProps) => {
  return <Card {...props} />;
})(() => ({
  backgroundImage:
    "linear-gradient(to right, #159957, #155799);",
}));

const RPaper = styled((props: PaperProps) => {
  return <Paper {...props} />;
})(() => ({
  backgroundColor: "#192a56",
  backgroundImage: "linear-gradient(to right, #141e30, #243b55)",
}));

const StyledDivider = styled((props: DividerProps) => {
  return <Divider {...props} />;
})(() => ({
  backgroundColor: "#c8d6e5",
}));

const Teacher = () => {
  const [visualizeNotes, setVisualizeNotes] = useState("");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setVisualizeNotes(event.target.value);
  };

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
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          sx={{ width: "100%" }}
        >
          <Box sx={{ width: "55%" }}>
            <RCard
              sx={{
                width: "100%",
                borderEndEndRadius: 0,
                borderStartEndRadius: 0,
              }}
            >
              <CardContent>
                <Box display="flex">
                  <Box display="flex">
                    <Image
                      src={
                        "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:good/v1657313211/VIRTUS/trophy-svgrepo-com_floryz.svg"
                      }
                      width={250}
                      height={180}
                      alt="computational thinking"
                    />
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      justifyContent={"center"}
                    >
                      <Typography variant="h5" fontWeight={800}>
                        Felicidades, name
                      </Typography>
                      <Typography variant="body1" fontSize={14}>
                        Cada vez estas más cerca de completar la capacitación en
                        pensamiento computacional.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ maxWidth: 170 }}>
                    <RPaper sx={{ p: 2, position: "relative" }}>
                      <Typography
                        sx={{
                          position: "absolute",
                          top: "32%",
                          color: "#10d46a",
                          right: 0,
                          left: "37%",
                          margin: "auto",
                        }}
                        variant="h5"
                        fontWeight={800}
                      >
                        88%
                      </Typography>
                      <Doughnut data={doughnoutData} options={OPTIONS} />
                      <Typography
                        variant="body1"
                        color="text.primary"
                        textAlign={"center"}
                        sx={{ mt: 1 }}
                      >
                        Nivel actual
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign={"center"}
                      >
                        Básico
                      </Typography>
                    </RPaper>
                  </Box>
                </Box>
              </CardContent>
            </RCard>
          </Box>
          <RCard
            sx={{
              width: "40%",
              color: "black",
              backgroundImage: "linear-gradient(to right, #141e30, #243b55)",
              p: 2,
              boxSizing: "border-box",
            }}
          >
            <CardHeader
              title="Name, mira tu progreso"
              subheader="September 14, 2016"
              sx={{ color: "white" }}
            />
            <CustomizedSteppers />
          </RCard>
        </Box>
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
                  label="120xp"
                  icon={<StarIcon />}
                  color="success"
                  size="small"
                />
              }
              title="Submodulo X"
              subheader="20 min. • Módulo • n Unidades"
              action={
                <Tooltip title="Ir">
                  <IconButton size="small">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          </Card>
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
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Módulo 1 - name -</MenuItem>
                <MenuItem value={2}>Módulo 2 - name -</MenuItem>
                <MenuItem value={3}>Módulo 3 - name -</MenuItem>
              </Select>
            </FormControl>
            <Box>
              <Chart type="bar" data={data} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>
            Explorar módulos
          </Typography>
          <ModuleStudy />
        </Box>
      </Box>
    </>
  );
};

export { Teacher };
