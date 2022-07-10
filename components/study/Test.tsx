import { Box, Checkbox, Chip, Typography } from "@mui/material";

// Interface
import { ITest } from "../../interfaces";

// Components
import { Question } from "../../components/study";

// Icons
import StarIcon from "@mui/icons-material/Star";

interface Props {
  test: ITest;
}

const Test = ({ test }: Props) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
        Comprobación de conocimientos:
      </Typography>
      <Chip
        label={`${test.exp} exp`}
        icon={<StarIcon />}
        color="success"
        size="small"
        sx={{ mb: 1 }}
      />
      <Typography variant="body1" fontWeight={600}>
        {test.name}
      </Typography>
      <Typography variant="body1">
        Responda a las preguntas siguientes para ver lo que ha aprendido. Elija
        una respuesta para cada pregunta y, después, seleccione Comprobar
        respuestas.
      </Typography>
      {test.questions.map((question, index) => (
        <Question key={index} question={question} index={index} />
      ))}
    </Box>
  );
};

export { Test };
