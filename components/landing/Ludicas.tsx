import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Ludicas = () => {
  return (
    <Box className="index__ludicas">
      <Grid container sx={{ flexGrow: 1 }} spacing={2} mb={3}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item>
              <Card sx={{ maxWidth: 320, height: "fit-content" }}>
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
                    Al final de cada módulo se te presentará una serie de
                    preguntas que te permitirán evaluar tu conocimiento
                    aprendido.
                  </Typography>
                </CardContent>
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
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 320, height: "fit-content" }}>
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
                    Pon a prueba tus conocimientos teóricos en una serie de
                    ejercicios prácticos básicos que servirán de base para
                    analizar to progreso en el curso.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box>
        <Box className="ludicas__detalles">
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
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Los quices son preguntas teóricas que tratan específicamente los
            temas del módulo, con el propósito de preguntar por los temas
            centrales o más importantes que se enseñaron, por eso es de vital
            importancia que estas preguntas sean respondidas correctamente.
          </Typography>
        </Box>
        <Box className="ludicas__detalles">
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
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Las actividades relacionales consisten en identificar la definición
            de los conceptos trabajados en el módulo y analizarlos para poder
            agruparlos, esto es una actividad evaluativa y generalmente existen
            más definiciones que conceptos, muchas veces aplican dos diferentes
            definiciones a un concepto pero se debe escoger el que agrupe
            mayores relaciones que definan correctamente el concepto.
          </Typography>
        </Box>
        <Box className="ludicas__detalles">
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
            variant="body2"
            fontSize={"1.2em"}
            textAlign={"justify"}
          >
            Los ejercicios prácticos son actividades avanzadas que ponen a
            prueba los conocimientos previos del módulo de una manera donde se
            pondrá a prueba algún tipo de ejercicio mental, pueden ser acertijos
            matemáticos, puzzles, cálculos, retos, etc.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Ludicas };
