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

// Redux
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  setCurrentSubModulo,
  setCurrentTest,
  setUserAnswers,
} from "../../reducers";

interface Props {
  id: string;
  modulo: IModulo;
}

const Submodule = ({ modulo, id }: Props) => {
  const dispatch = useAppDispatch();
  const { currentSubModulo } = useAppSelector((state) => state.study);

  const [nextSubmodule, setSubmoduleNext] = useState<ISubModulo | null>(null);
  const [beforeSubmodule, setSubmoduleBefore] = useState<ISubModulo | null>(
    null
  );

  const { user } = useAppSelector((state) => state.auth);
  const { answers } = user;

  const [subUserModuleAnswers, setSubUserModuleAnswers] = useState<
    number[] | null
  >(null);

  useEffect(() => {
    const currentIndexModule = Number(id[0]) - 1;

    if (answers) {
      setSubUserModuleAnswers(
        answers[currentIndexModule][
          modulo.content.findIndex((data) => data.to === id)
        ]
      );
    }
  }, [answers, id, modulo]);

  useEffect(() => {
    const payload = modulo.content.find((data) => data.to === id)!;
    setSubmoduleNext(
      modulo.content[modulo.content.findIndex((data) => data.to === id) + 1] ||
        null
    );
    setSubmoduleBefore(
      modulo.content[modulo.content.findIndex((data) => data.to === id) - 1] ||
        null
    );
    dispatch(setCurrentSubModulo(payload));
  }, [modulo, id, dispatch]);

  useEffect(() => {
    if (currentSubModulo) {
      dispatch(setCurrentTest(currentSubModulo.test));
      dispatch(setUserAnswers(null));
    }
  }, [dispatch, currentSubModulo]);

  return (
    <Box sx={{ p: 2 }}>
      {currentSubModulo ? (
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
              {currentSubModulo.name}
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
              label={`${currentSubModulo.exp} exp`}
              icon={<StarIcon />}
              color="success"
              size="small"
              sx={{ mb: 1, mr: 1 }}
            />
            <Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                • {currentSubModulo.time} minutos
              </Typography>
            </Box>
          </Box>
          <Box>Acá va el contenido del submódulo</Box>
          <Box>
            <Test answers={subUserModuleAnswers} />
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
