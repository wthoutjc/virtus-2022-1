import NextLink from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Interfaces
import { IModulo, ISubModulo } from "../../interfaces";

interface Props {
  modulos: IModulo[];
  context?: string;
}

const ModuleStudy = ({ modulos, context = "in-app" }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [currentSubmodule, setCurrentSubmodule] = useState<ISubModulo>(
    modulos[0].content[0]
  );

  const handleClick = (index: number, index2: number) => {
    setCurrentSubmodule(modulos[index].content[index2]);
  };

  if (context === "in-app") {
    return (
      <>
        {modulos
          ? modulos.map((modulo, index) => {
              return (
                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`modulo${
                      index + 1
                    }-pensamiento-computacional`}
                    id={`mod${index + 1}`}
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Modulo {index + 1}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {modulo.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {modulo.content.map((content, index) => {
                      return (
                        <Card
                          key={index}
                          sx={{
                            height: "fit-content",
                            backgroundColor: "#112233ff",
                            mb: 2,
                          }}
                        >
                          <CardHeader
                            avatar={
                              <Chip
                                label={`${content.exp} exp`}
                                icon={<StarIcon />}
                                color="success"
                                size="small"
                              />
                            }
                            title={`${content.name}`}
                            subheader={`${content.time} min • Submódulo • ${
                              index + 1
                            } unidad`}
                            action={
                              <NextLink
                                href={`/home/learn/${content.to}`}
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
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              );
            })
          : "Loading..."}
      </>
    );
  }
  return (
    <>
      <Box className="index__teoriaAccordion">
        <Box className="index__teoriaAccordion_container1">
          {modulos
            ? modulos.map((modulo, index) => {
                return (
                  <Accordion
                    TransitionProps={{ unmountOnExit: true }}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`modulo${
                        index + 1
                      }-pensamiento-computacional`}
                      id={`mod${index + 1}`}
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Modulo {index + 1}
                      </Typography>
                      <Typography sx={{ color: "text.secondary" }}>
                        {modulo.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {modulo.content.map((content, index2) => {
                        return (
                          <Card
                            key={index2}
                            sx={{
                              height: "fit-content",
                              backgroundColor: "#112233ff",
                              mb: 2,
                            }}
                          >
                            <CardHeader
                              avatar={
                                <Chip
                                  label={`${content.exp} exp`}
                                  icon={<StarIcon />}
                                  color="success"
                                  size="small"
                                />
                              }
                              title={`${content.name}`}
                              subheader={`${content.time} min • Submódulo • ${
                                index2 + 1
                              } unidad`}
                              action={
                                <Tooltip title="Explorar">
                                  <IconButton
                                    onClick={() => handleClick(index, index2)}
                                  >
                                    <ArrowForwardIosIcon />
                                  </IconButton>
                                </Tooltip>
                              }
                            />
                          </Card>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                );
              })
            : "Loading..."}
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
                  label={`${
                    currentSubmodule.exp + currentSubmodule.test.exp
                  } exp`}
                  icon={<StarIcon />}
                  color="success"
                  size="small"
                />
              }
              title={`${currentSubmodule.name}`}
              subheader={`${currentSubmodule.time} min • ${currentSubmodule.modulo} • Submódulo`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {currentSubmodule.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign={"justify"}
              >
                {currentSubmodule.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export { ModuleStudy };
