import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

//Motion Effects
import { motion } from "framer-motion";

const Nosotros = () => {
  return (
    <Box className="index__nosotros">
      <Box className="nosotros__descripcion">
        <Box>
          <Typography gutterBottom variant="h3">
            Primeros pasos en el pensamiento computacional
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Este curso está enfocado en enseñar las bases teóricas del
            pensamiento computacional, reflexionar sobre lo importante que es
            tener un aprendizaje temprano de estos conceptos para solucionar
            problemas complejos, y así, ampliar nuestra habilidad para
            intercambiar ideas, comunicarnos, aprender a trabajar de manera
            colaborativa y poder establecer una base algorítmica de pensamiento
            lógico replicable computacionalmente.
          </Typography>
          <Typography variant="caption" fontSize={"1.2em"}>
            <i>
              &quot;El verdadero progreso es el que pone la tecnología al
              alcance de todos.&quot;
            </i>
          </Typography>
          <Typography variant="body1"> - Henry Ford</Typography>
        </Box>
        <Box display={"flex"} justifyContent="center">
          <Card sx={{ maxWidth: 360, height: "fit-content" }}>
            <CardMedia title="Pensamiento Computacional">
              <Image
                src={
                  "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:good/v1654900388/VIRTUS/marvin-meyer-SYTO3xs06fU-unsplash_pamezh.jpg"
                }
                width={360}
                height={200}
                alt="computational thinking"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pensamiento Computacional
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign={"justify"}
              >
                Curso completamente virtual y gratis orientado a docentes que
                quieran incorporar el pensamiento computacional como un modelo
                pedagógico de aprendizaje.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Comenzar
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
      <Box className="nosotros__objetivos">
        <Box display={"flex"} justifyContent="center">
          <Card sx={{ maxWidth: 360, height: "fit-content" }}>
            <CardMedia title="Pensamiento Computacional">
              <Image
                src={
                  "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:eco/v1654903824/VIRTUS/adi-goldstein-EUsVwEOsblE-unsplash_gbnljh.jpg"
                }
                width={360}
                height={200}
                alt="computational thinking"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fuentes teóricas
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign={"justify"}
              >
                Este es un trabajo de investigación, debido a esto, en esta
                sección podrás averiguar por todas nuestras fuentes consultadas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Acceder
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4" gutterBottom>
            Descripción del pro
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Acceso gratuito a un contenido de aprendizaje e-learning que brinda
            un espacio cómodo, dinámico e interactivo que estará disponible las
            24 horas del día, los 7 días de la semana.
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Guarda tus procesos de aprendizaje, tus puntuaciones y logros a
            medida que desarrolles el contenido programático.
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Acceso a diferentes fuentes de información verificables como
            contenido complementario.
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Contenido modularizado y con alto nivel de granularidad, puedes ver
            cada sección independientemente de no haber visto la anterior, sin
            embargo, si es la primera vez que accedes al contenido es
            recomendable seguir la ruta pre establecida.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Nosotros };
