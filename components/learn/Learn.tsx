import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

// Icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

// Redux
import { useAppSelector } from "../../hooks";

const Learn = () => {
  const { modulos } = useAppSelector((state) => state.study);
  return (
    <>
      {modulos
        ? modulos.map((modulo, index) => {
            return (
              <Box
                key={index}
                display="flex"
                flexDirection={"column"}
                sx={{ p: 3 }}
              >
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  sx={{ width: "100%" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={800}
                    alignSelf={"flex-start"}
                  >
                    {modulo.name}
                  </Typography>

                  <Chip
                    label={`${modulo.content
                      .map((data) => data.exp + data.test.exp)
                      .reduce((prev, curr) => prev + curr)} exp`}
                    icon={<StarIcon />}
                    color="success"
                    size="small"
                  />
                </Box>

                <Typography variant="body1" sx={{ mb: 1 }}>
                  {modulo.content.length} submódulos •{" "}
                  {modulo.content
                    .map((data) => data.time)
                    .reduce((prev, curr) => prev + curr)}{" "}
                  minutos
                </Typography>

                <Box sx={{ mb: 1 }}>
                  {modulo.keyWords.map((keyWord, index) => {
                    return (
                      <Chip
                        sx={{ mr: 1 }}
                        key={index}
                        label={keyWord}
                        color="success"
                      />
                    );
                  })}
                </Box>

                <Typography variant="body1" fontWeight={400} sx={{ mb: 1 }}>
                  {modulo.descripcion}
                </Typography>

                <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                  Objetivos
                </Typography>

                <ul style={{ marginLeft: 30, marginBottom: 10 }}>
                  {modulo.goals.map((goal, index) => {
                    return <li key={index}>{goal}</li>;
                  })}
                </ul>

                <Box sx={{ mb: 1 }}>
                  <NextLink
                    href={`/home/learn/${modulo.content[0].to}`}
                    passHref
                  >
                    <Button
                      variant="contained"
                      size="small"
                      color="success"
                      endIcon={<ArrowForwardIosIcon />}
                    >
                      Comenzar
                    </Button>
                  </NextLink>
                </Box>

                <Typography variant="h5" fontWeight={600}>
                  Requisitos previos
                </Typography>

                <Typography variant="body2" fontWeight={400} sx={{ mb: 1 }}>
                  {modulo.requirements}
                </Typography>

                <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                  Submódulos
                </Typography>

                {modulo.content.map((data, index) => {
                  return (
                    <Card
                      key={index}
                      sx={{
                        height: "fit-content",
                        backgroundColor: "#112233ff",
                        width: "60%",
                        mb: 2,
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Chip
                            label={`${data.exp + data.test.exp} exp`}
                            icon={<StarIcon />}
                            color="success"
                            size="small"
                          />
                        }
                        title={`${data.name}`}
                        subheader={`${data.time} minutos • Submódulo • ${
                          index + 1
                        } unidad`}
                        action={
                          <NextLink href={`/home/learn/${data.to}`} passHref>
                            <Tooltip title="Ir">
                              <IconButton>
                                <ArrowForwardIosIcon />
                              </IconButton>
                            </Tooltip>
                          </NextLink>
                        }
                      />
                    </Card>
                  );
                })}
              </Box>
            );
          })
        : "Loading..."}
    </>
  );
};

export { Learn };
