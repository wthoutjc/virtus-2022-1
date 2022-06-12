import { Box, IconButton, Link, Tooltip, Typography } from "@mui/material";
import NextLink from "next/link";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box className="index__footer">
      <Box sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}>
        <Box sx={{ width: "30%" }}>
          <Typography variant="h6" fontSize={"1em"} sx={{ mb: 2 }}>
            VIRTUS Training
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={"0.6em"}
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
        </Box>
        <Box sx={{ width: "16%" }}>
          <Typography variant="h6" fontSize={"1em"} sx={{ mb: 2 }}>
            Relacionados
          </Typography>
          <NextLink href={"http://grupovirtus.org/"} passHref>
            <Link>
              <Typography
                variant="subtitle1"
                fontSize={"0.7em"}
                textAlign={"justify"}
                sx={{ mb: 1 }}
              >
                Grupo VIRTUS
              </Typography>
            </Link>
          </NextLink>
          <NextLink href={"https://www.udistrital.edu.co/inicio"} passHref>
            <Link>
              <Typography
                variant="subtitle1"
                fontSize={"0.7em"}
                textAlign={"justify"}
                sx={{ mb: 1 }}
              >
                Universidad Distrital Francisco José de Caldas
              </Typography>
            </Link>
          </NextLink>
        </Box>
        <Box sx={{ width: "16%" }}>
          <Typography variant="h6" fontSize={"1em"} sx={{ mb: 2 }}>
            Términos de uso
          </Typography>
          <NextLink href={"/"} passHref>
            <Link>
              <Typography
                variant="subtitle1"
                fontSize={"0.6em"}
                textAlign={"justify"}
                sx={{ mb: 1 }}
              >
                Términos y condiciones
              </Typography>
            </Link>
          </NextLink>
          <NextLink href={"/"} passHref>
            <Link>
              <Typography
                variant="subtitle1"
                fontSize={"0.6em"}
                textAlign={"justify"}
                sx={{ mb: 1 }}
              >
                Copyright
              </Typography>
            </Link>
          </NextLink>
          <NextLink href={"/"} passHref>
            <Link>
              <Typography
                variant="subtitle1"
                fontSize={"0.6em"}
                textAlign={"justify"}
                sx={{ mb: 1 }}
              >
                Política de privacidad
              </Typography>
            </Link>
          </NextLink>
        </Box>
        <Box sx={{ width: "16%" }}>
          <Typography variant="h6" fontSize={"1em"} sx={{ mb: 2 }}>
            Nosotros
          </Typography>
          <NextLink href={"/"} passHref>
            <Link>
              <Tooltip title="GitHub">
                <IconButton size="small">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </NextLink>
          <NextLink href={"/"} passHref>
            <Link>
              <Tooltip title="LinkedIn">
                <IconButton size="small">
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </NextLink>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        Copyright © 2022 VIRTUS Training. All rights reserved.
      </Box>
    </Box>
  );
};

export { Footer };
