import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
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

const ModuleStudy = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Modulo 1</Typography>
          <Typography sx={{ color: "text.secondary" }}>Trata sobre</Typography>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Modulo 2</Typography>
          <Typography sx={{ color: "text.secondary" }}>Trata sobre</Typography>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Modulo 3</Typography>
          <Typography sx={{ color: "text.secondary" }}>Trata sobre</Typography>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Modulo 4</Typography>
          <Typography sx={{ color: "text.secondary" }}>Trata sobre</Typography>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Modulo 5</Typography>
          <Typography sx={{ color: "text.secondary" }}>Trata sobre</Typography>
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Modulo 6</Typography>
          <Typography sx={{ color: "text.secondary" }}>Trata sobre</Typography>
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
    </>
  );
};

export { ModuleStudy };
