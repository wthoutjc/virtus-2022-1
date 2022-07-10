import { Box, Typography } from "@mui/material";

//Motion Effects
import { motion } from "framer-motion";

// Components
import { ModuleStudy } from "../study";

// Interfaces
import { IModulo } from "../../interfaces";

interface Props {
  modulos: IModulo[];
}

const Teoria = ({ modulos }: Props) => {
  return (
    <Box className="index__teoria">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        style={{ width: "100%" }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", paddingBottom: "0.5em" }}
          textAlign={"center"}
        >
          Módulos en la ruta de aprendizaje
        </Typography>
        <Typography
          variant="h6"
          sx={{ paddingBottom: "1.5em" }}
          textAlign={"center"}
        >
          Conoce nuestra ruta de aprendizaje que te guiará en tu proceso de
          formación en el pensamiento computacional.
        </Typography>
        <ModuleStudy modulos={modulos} context={"out-app"} />
      </motion.div>
    </Box>
  );
};

export { Teoria };
