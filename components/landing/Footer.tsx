import { Box, IconButton, Link, Tooltip, Typography } from "@mui/material";
import NextLink from "next/link";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Redux
import { useAppDispatch } from "../../hooks";
import { INotification } from "../../interfaces";
import { newNotification } from "../../reducers";

// uuid
import { v4 as uuid } from "uuid";

interface NosotrosProps {
  socialNetwork: string;
  link: string;
  name: string;
}

const NosotrosINFO = ({ socialNetwork, link, name }: NosotrosProps) => {
  return (
    <>
      <Typography
        variant="body1"
        fontSize={"1em"}
        textAlign={"justify"}
        sx={{ mb: 1 }}
      >
        Conócenos en {socialNetwork}
      </Typography>
      <NextLink href={link} passHref>
        <Link>
          <Typography
            variant="subtitle1"
            fontSize={"0.7em"}
            textAlign={"justify"}
            sx={{ mb: 1 }}
          >
            {name}
          </Typography>
        </Link>
      </NextLink>
    </>
  );
};

const Footer = () => {
  const dispatch = useAppDispatch();

  const handleMessage = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Información",
      message: "Sección en construcción 🚧",
      severity: "info",
    };
    dispatch(newNotification(payload));
  };

  const handleGitHub = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Desarrolladores",
      message: (
        <NosotrosINFO
          socialNetwork={"GitHub"}
          link={"https://github.com/wthoutjc"}
          name={"Juan Camilo Ramírez Rátiva"}
        />
      ),
      severity: "info",
    };
    dispatch(newNotification(payload));
  };

  const handleLinkedIn = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Desarrolladores",
      message: (
        <NosotrosINFO
          socialNetwork={"LinkedIn"}
          link={
            "https://www.linkedin.com/in/juan-camilo-ram%C3%ADrez-r%C3%A1tiva-010a9320b/"
          }
          name={"Juan Camilo Ramírez Rátiva"}
        />
      ),
      severity: "info",
    };
    dispatch(newNotification(payload));
  };

  return (
    <Box className="index__footer">
      <Box className="index__footer_container">
        <Box className="index__footer_cards">
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
        <Box className="index__footer_cards2">
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
        <Box className="index__footer_cards2">
          <Typography variant="h6" fontSize={"1em"} sx={{ mb: 2 }}>
            Términos de uso
          </Typography>
          <NextLink href={"/"} passHref>
            <Link onClick={handleMessage}>
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
            <Link onClick={handleMessage}>
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
            <Link onClick={handleMessage}>
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
        <Box className="index__footer_cards2">
          <Typography variant="h6" fontSize={"1em"} sx={{ mb: 2 }}>
            Nosotros
          </Typography>
          <Tooltip title="GitHub" onClick={handleGitHub}>
            <IconButton size="small">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" onClick={handleLinkedIn}>
            <IconButton size="small">
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Typography
          variant="body1"
          fontSize={".7em"}
          textAlign={"justify"}
          sx={{ mb: 1, m: 1 }}
        >
          Copyright © 2022 VIRTUS Training. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export { Footer };
