import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Paper,
  PaperProps,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";

import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);
import { Doughnut } from "react-chartjs-2";

// Interfaces
import { IGrade } from "../../../../interfaces";
import { useEffect, useState } from "react";
import { CustomizedSteppers } from "./Stepper";

const RCard = styled((props: CardProps) => {
  return <Card {...props} />;
})(() => ({
  backgroundImage: "linear-gradient(to right, #159957, #155799);",
}));

const RPaper = styled((props: PaperProps) => {
  return <Paper {...props} />;
})(() => ({
  backgroundColor: "#192a56",
  backgroundImage: "linear-gradient(to right, #141e30, #243b55)",
}));

const OPTIONS = {
  cutout: 55,
  responsive: true,
};

interface Props {
  grades?: IGrade;
  name: String;
}

type TypeRange = "Básico" | "Intermedio" | "Avanzado" | null;

const Progress = ({ grades, name }: Props) => {
  const [range, setRange] = useState<TypeRange>(null);
  const [progress, setProgress] = useState(0);

  const [doughnoutData, setDoughnoutData] = useState({
    labels: ["Falta", "Alcanzado"],
    datasets: [
      {
        label: "% Learned",
        data: [100, 0],
        backgroundColor: ["#243b55", "#00d46a63"], // Falta - Alcanzado
        borderColor: ["#243b55", "#10d46a"],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (!grades) {
      setRange("Básico");
      return;
    }
    if (grades?.module3) {
      setRange("Avanzado");
      return;
    }
    if (grades?.module2) {
      setRange("Intermedio");
      return;
    }
    if (grades?.module1) {
      setRange("Básico");
      return;
    }
  }, [grades]);

  useEffect(() => {
    if (grades) {
      switch (range) {
        case "Básico":
          setProgress((grades.module1.length * 100) / 6);
          setDoughnoutData({
            labels: ["Falta", "Alcanzado"],
            datasets: [
              {
                label: "% Learned",
                data: [
                  100 - (grades.module1.length * 100) / 6,
                  (grades.module1.length * 100) / 6,
                ],
                backgroundColor: ["#243b55", "#00d46a63"], // Falta - Alcanzado
                borderColor: ["#243b55", "#10d46a"],
                borderWidth: 1,
              },
            ],
          });
          break;
        case "Intermedio":
          setProgress((grades.module2.length * 100) / 4);
          setDoughnoutData({
            labels: ["Falta", "Alcanzado"],
            datasets: [
              {
                label: "% Learned",
                data: [
                  100 - (grades.module2.length * 100) / 4,
                  (grades.module2.length * 100) / 4,
                ],
                backgroundColor: ["#243b55", "#00d46a63"], // Falta - Alcanzado
                borderColor: ["#243b55", "#10d46a"],
                borderWidth: 1,
              },
            ],
          });
          break;
        case "Avanzado":
          setProgress((grades.module3.length * 100) / 7);
          setDoughnoutData({
            labels: ["Falta", "Alcanzado"],
            datasets: [
              {
                label: "% Learned",
                data: [
                  100 - (grades.module3.length * 100) / 7,
                  (grades.module3.length * 100) / 7,
                ],
                backgroundColor: ["#243b55", "#00d46a63"], // Falta - Alcanzado
                borderColor: ["#243b55", "#10d46a"],
                borderWidth: 1,
              },
            ],
          });
          break;
        default:
          setProgress(0);
          break;
      }
    }
  }, [grades, range]);

  return (
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
                    {progress === 0
                      ? `Bienvenid@, ${name}`
                      : progress > 0 && progress <= 30
                      ? `Hola, ${name}`
                      : progress > 30 && progress <= 60
                      ? `Sigue así, ${name}`
                      : progress > 60 && progress <= 90
                      ? `Ánimo, ${name}`
                      : progress > 90 && progress < 100
                      ? `Ya casi, ${name}`
                      : progress === 100 && `Felicidades, ${name}`}
                  </Typography>
                  <Typography variant="body1" fontSize={14}>
                    {progress === 0
                      ? `Qué esperas para adentrarte en esta aplicación que tiene como principal objetivo darte a conocer todos los conceptos necesarios para que entiendas de una vez el pensamiento computacional.`
                      : progress > 0 && progress <= 30
                      ? `Ánimo ${name}, cada momento que estés en nuestra app es un paso agigantado para entrar en el mundo del pensamiento computacional.`
                      : progress > 30 && progress <= 60
                      ? `Estás dando pasos firmes en la capacitación en pensamiento computacional, sigue asi ${name}.`
                      : progress > 60 && progress <= 90
                      ? "Cada vez estas más cerca de completar la capacitación en pensamiento computacional."
                      : progress > 90 && progress < 100
                      ? "Estás en la recta final de este módulo, sigue así para obtener el resultado final y cerciorarte de que manejas los conceptos del pensamiento computacional."
                      : progress === 100 &&
                        "Has completado con éxito esté módulo, sigue avanzando o en caso de haber completado todos los módulos próximamente añadiremos un sistema de certificación, mantente pendiente :)"}
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
                    {Math.trunc(progress)}%
                  </Typography>
                  <Doughnut data={doughnoutData} options={OPTIONS} />
                  <Typography
                    variant="body1"
                    color="text.primary"
                    textAlign={"center"}
                    sx={{ mt: 1 }}
                  >
                    Módulo actual
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"center"}
                  >
                    {range ||'Básico'}
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
          title={`${name}, mira tu progreso`}
          subheader="September 14, 2016"
          sx={{ color: "white" }}
        />
        <CustomizedSteppers
          activeStep={
            range === "Básico"
              ? 0
              : range === "Intermedio"
              ? 1
              : range === "Avanzado"
              ? 2
              : 0
          }
        />
      </RCard>
    </Box>
  );
};

export { Progress };
