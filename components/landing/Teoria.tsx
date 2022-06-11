import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Teoria = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box className="index__teoria">
      <Typography gutterBottom variant="h3">
        Módulos en la ruta de aprendizaje
      </Typography>
      <Box sx={{ width: "50%" }}>
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
            <Typography>
              Aca nos expresamos más a detalle sobre el módulo 1.
            </Typography>
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
            <Typography>
              Aca nos expresamos más a detalle sobre el módulo 2.
            </Typography>
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
            <Typography>
              Aca nos expresamos más a detalle sobre el módulo 3.
            </Typography>
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
            <Typography>
              Aca nos expresamos más a detalle sobre el módulo 4.
            </Typography>
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
            <Typography>
              Aca nos expresamos más a detalle sobre el módulo 5.
            </Typography>
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
            <Typography>
              Aca nos expresamos más a detalle sobre el módulo 6.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export { Teoria };
