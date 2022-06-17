import { useState, useEffect } from "react";
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

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//Motion Effects
import { motion, MotionProps } from "framer-motion";

const Teoria = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const variants: MotionProps = isMobile
    ? {
        initial: { x: -400, opacity: 0 },
        transition: { duration: 1 },
        whileInView: { x: 0, opacity: 1 },
        style: { width: "100%" },
        viewport: { once: true },
      }
    : {};

  return (
    <Box className="index__teoria">
      <motion.div {...variants}>
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
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="modulo1-pensamiento-computacional"
                id="mod1"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Modulo 1
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Trata sobre
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="modulo1-pensamiento-computacional"
                id="mod1"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Modulo 2
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Trata sobre
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="modulo1-pensamiento-computacional"
                id="mod1"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Modulo 3
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Trata sobre
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="modulo1-pensamiento-computacional"
                id="mod1"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Modulo 4
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Trata sobre
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="modulo1-pensamiento-computacional"
                id="mod1"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Modulo 5
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Trata sobre
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="modulo1-pensamiento-computacional"
                id="mod1"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Modulo 6
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Trata sobre
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
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
