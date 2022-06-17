import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

// Motion
import { motion, MotionProps } from "framer-motion";

type ShowMore = "quices" | "actividades relacionales" | "ejercicios practicos";

const Ludicas = () => {
  const [showMore, setShowMore] = useState<ShowMore | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const variants: MotionProps = !isMobile
    ? {
        initial: { x: 600, opacity: 0 },
        transition: { duration: 1 },
        whileInView: { x: 0, opacity: 1 },
        style: { width: "100%" },
        viewport: { once: true },
      }
    : {};

  return (
    <Box className="index__ludicas">
      <motion.div {...variants}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", paddingBottom: "0.5em" }}
          textAlign={"center"}
        >
          Aprende mientras enseñas
        </Typography>
        <Typography
          variant="h6"
          sx={{ paddingBottom: "1.5em" }}
          textAlign={"center"}
        >
          Todas las herramientas para obtener las mejores bases en pensamiento
          computacional.
        </Typography>
        <Grid container sx={{ flexGrow: 1 }} spacing={2} mb={3}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item>
                <Card
                  sx={{
                    maxWidth: 320,
                    height: "fit-content",
                    backgroundColor: "#112233ff",
                  }}
                >
                  <CardMedia title="Pensamiento Computacional">
                    <Image
                      src={
                        "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:eco/v1654906125/VIRTUS/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash_pl3sje.jpg"
                      }
                      width={320}
                      height={200}
                      alt="computational thinking"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Quices
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"justify"}
                    >
                      Al final de cada módulo se presentará una serie de
                      preguntas que permitirán evaluar su conocimiento aprendido
                      en los módulos de aprendizaje.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => setShowMore("quices")}
                    >
                      Ver más
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ maxWidth: 320, height: "fit-content" }}>
                  <CardMedia title="Pensamiento Computacional">
                    <Image
                      src={
                        "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:eco/v1654906246/VIRTUS/vardan-papikyan-JzE1dHEaAew-unsplash_xnutui.jpg"
                      }
                      width={320}
                      height={200}
                      alt="computational thinking"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Actividades relacionales
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"justify"}
                    >
                      Relaciona y enlaza conceptos para reflexionar acerca de lo
                      aprendido en un módulo, con el propósito de analizar los
                      conceptos y sus significados.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => setShowMore("actividades relacionales")}
                    >
                      Ver más
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{
                    maxWidth: 320,
                    height: "fit-content",
                    backgroundColor: "#11223366",
                  }}
                >
                  <CardMedia title="Pensamiento Computacional">
                    <Image
                      src={
                        "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:good/v1654900388/VIRTUS/marvin-meyer-SYTO3xs06fU-unsplash_pamezh.jpg"
                      }
                      width={320}
                      height={200}
                      alt="computational thinking"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ejercicios prácticos
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign={"justify"}
                    >
                      Ponga a prueba sus conocimientos teóricos en una serie de
                      ejercicios prácticos básicos que servirán de base para
                      analizar su progreso en el curso.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => setShowMore("ejercicios practicos")}
                    >
                      Ver más
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box>
          {showMore === "quices" && (
            <motion.div
              initial={{ y: -100, x: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              style={{ width: "100%" }}
              viewport={{ once: true }}
              className="ludicas__detalles"
            >
              <Image
                src={
                  "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:eco/v1654906334/VIRTUS/escoger_usmo2u.png"
                }
                width={240}
                height={220}
                alt="computational thinking"
              />
              <Typography
                sx={{ ml: 3 }}
                variant="subtitle1"
                fontSize={"1em"}
                textAlign={"justify"}
              >
                Los quices son preguntas teóricas que tratan específicamente los
                temas del módulo, con el propósito de preguntar por los temas
                centrales o más importantes que se enseñaron, por eso es de
                vital importancia que estas preguntas sean respondidas
                correctamente.
              </Typography>
            </motion.div>
          )}
          {showMore === "actividades relacionales" && (
            <motion.div
              initial={{ y: -100, x: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              style={{ width: "100%" }}
              viewport={{ once: true }}
              className="ludicas__detalles"
            >
              <Image
                src={
                  "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:eco/v1654906427/VIRTUS/depresion_wsrwky.png"
                }
                width={340}
                height={280}
                alt="computational thinking"
              />
              <Typography
                sx={{ ml: 3 }}
                variant="subtitle1"
                fontSize={"1em"}
                textAlign={"justify"}
              >
                Las actividades relacionales consisten en identificar la
                definición de los conceptos trabajados en el módulo y
                analizarlos para poder agruparlos, esto es una actividad
                evaluativa y generalmente existen más definiciones que
                conceptos, muchas veces aplican dos diferentes definiciones a un
                concepto pero se debe escoger el que agrupe mayores relaciones
                que definan correctamente el concepto.
              </Typography>
            </motion.div>
          )}
          {showMore === "ejercicios practicos" && (
            <motion.div
              initial={{ y: -100, x: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              style={{ width: "100%" }}
              viewport={{ once: true }}
              className="ludicas__detalles"
            >
              <Image
                src={
                  "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:eco/v1654907740/VIRTUS/light-bulb_lfezyf.png"
                }
                width={210}
                height={170}
                alt="computational thinking"
              />
              <Typography
                sx={{ ml: 3 }}
                variant="subtitle1"
                fontSize={"1em"}
                textAlign={"justify"}
              >
                Los ejercicios prácticos son actividades avanzadas que ponen a
                prueba los conocimientos previos del módulo de una manera donde
                se pondrá a prueba algún tipo de ejercicio mental, pueden ser
                acertijos matemáticos, puzzles, cálculos, retos, etc.
              </Typography>
            </motion.div>
          )}
        </Box>
      </motion.div>
    </Box>
  );
};

export { Ludicas };
