import NextLink from "next/link";
import { Box, Button, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// Interfaces
import { IModulo, ISubModulo } from "../../interfaces";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Icons
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Components
import { Test } from "../../components/study";

interface Props {
  id: string;
  modulo: IModulo;
}

const Submodule = ({ modulo, id }: Props) => {
  const [submodule, setSubmodule] = useState<ISubModulo | null>(null);
  const [nextSubmodule, setSubmoduleNext] = useState<ISubModulo | null>(null);
  const [beforeSubmodule, setSubmoduleBefore] = useState<ISubModulo | null>(
    null
  );

  useEffect(() => {
    setSubmoduleNext(
      modulo.content[modulo.content.findIndex((data) => data.to === id) + 1] ||
        null
    );
    setSubmoduleBefore(
      modulo.content[modulo.content.findIndex((data) => data.to === id) - 1] ||
        null
    );
    setSubmodule(modulo.content.find((data) => data.to === id) || null);
  }, [modulo, id]);

  return (
    <Box sx={{ p: 2 }}>
      {submodule ? (
        <>
          <Box display="flex" justifyContent={"space-between"} sx={{ mb: 2 }}>
            {beforeSubmodule && (
              <NextLink href={beforeSubmodule.to} passHref>
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  endIcon={<ArrowBackIosIcon />}
                >
                  Anterior
                </Button>
              </NextLink>
            )}
            <Typography variant="h5" fontWeight={600}>
              {submodule.name}
            </Typography>
            {nextSubmodule && (
              <NextLink href={nextSubmodule.to} passHref>
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  endIcon={<ArrowForwardIosIcon />}
                >
                  Siguiente
                </Button>
              </NextLink>
            )}
          </Box>
          <Box display="flex">
            <Chip
              label={`${submodule.exp} exp`}
              icon={<StarIcon />}
              color="success"
              size="small"
              sx={{ mb: 1, mr: 1 }}
            />
            <Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • {submodule.time} minutos
              </Typography>
            </Box>
          </Box>
          <Box>Acá va el contenido del submódulo</Box>
          <Box>
            <Test test={submodule.test} />
            <Button color="success" variant="contained">
              Comprobar respuestas
            </Button>
          </Box>
        </>
      ) : (
        "Loading..."
      )}
    </Box>
  );
};

export { Submodule };
