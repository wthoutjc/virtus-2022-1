import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";

//Motion Effects
import { motion, MotionProps } from "framer-motion";

// Redux
import { useAppDispatch } from "../../hooks";
import { INotification } from "../../interfaces";
import { newNotification } from "../../reducers";

// uuid
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

const Nosotros = () => {
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleStart = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Información",
      message: "Sección en construcción 🚧",
      severity: "info",
    };
    dispatch(newNotification(payload));
  };

  const variants: MotionProps = isMobile
    ? {
        initial: { x: 600, opacity: 0 },
        transition: { duration: 1 },
        whileInView: { x: 0, opacity: 1 },
        style: { width: "100%" },
        viewport: { once: true },
      }
    : {};

  return (
    <Box className="index__nosotrosBack">
      <motion.div {...variants}>
        <Box className="index__nosotros">
          <Box sx={{ position: "relative" }}>
            <Box sx={{ width: 400 }}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fdcb6e"
                  d="M49.2,-57.6C65.5,-45,81.7,-31.1,84.7,-14.9C87.6,1.4,77.3,20,66.1,37.1C55,54.1,43,69.6,28.1,73.5C13.1,77.3,-4.7,69.6,-21.5,62.2C-38.3,54.7,-54.1,47.5,-61.2,35.3C-68.3,23.1,-66.6,5.8,-62.7,-10C-58.7,-25.9,-52.3,-40.3,-41.5,-53.9C-30.6,-67.5,-15.3,-80.2,0.6,-80.9C16.4,-81.6,32.9,-70.2,49.2,-57.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "60px",
              }}
            >
              <Image
                src={
                  "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:best/v1654992009/VIRTUS/teacher_1_ttoba1.png"
                }
                width={360}
                height={330}
                alt="computational thinking"
              />
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                paddingBottom: "0.5em",
                color: "rgba(187, 187, 187, 0.877)",
              }}
            >
              Primeros pasos en el pensamiento computacional
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", paddingBottom: "0.5em" }}
            >
              Descripción del proyecto
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={"1em"}
              textAlign={"justify"}
              sx={{ pb: 2 }}
            >
              Curso completamente virtual y gratis orientado a docentes que
              quieran incorporar el pensamiento computacional como un modelo
              pedagógico de aprendizaje.
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={"1em"}
              textAlign={"justify"}
              sx={{ pb: 2 }}
            >
              Contenido modularizado y con alto nivel de granularidad, puedes
              ver cada sección independientemente de no haber visto la anterior,
              sin embargo, si es la primera vez que accedes al contenido es
              recomendable seguir la ruta pre establecida.
            </Typography>
            <Button variant="contained" onClick={handleStart}>
              Comenzar
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export { Nosotros };
