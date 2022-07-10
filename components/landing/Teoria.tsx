import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";

//Motion Effects
import { motion } from "framer-motion";

// Components
import { ModuleStudy } from "../study";
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
        <Box className="index__teoriaAccordion">
          <Box className="index__teoriaAccordion_container1">
            <ModuleStudy modulos={modulos} />
          </Box>
          <Box className="index__teoriaAccordion_container2">
            <Card
              sx={{
                height: "fit-content",
                backgroundColor: "#112233ff",
              }}
            >
              <CardHeader
                avatar={
                  <Chip
                    label="1000xp"
                    icon={<StarIcon />}
                    color="success"
                    size="small"
                  />
                }
                title="Módulo X"
                subheader="120 min. • Módulo • n Unidades"
                action={
                  <Tooltip title="Opciones">
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Nombre del tema
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign={"justify"}
                >
                  Descripción del tema, Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Minima, neque atque? Aspernatur cumque nihil
                  corrupti quibusdam, voluptates dolorum ipsam vitae! Natus
                  tenetur labore minus repellat veniam ducimus ab cum libero.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export { Teoria };
