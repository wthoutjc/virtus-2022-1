import { Box, Checkbox, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

//Interfaces
import { IQuestion } from "../../interfaces";

interface Props {
  question: IQuestion;
  index: number;
}

const Question = ({ question, index }: Props) => {
  const [checked, setChecked] = useState([false, false, false, false]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let newChecked = [false, false, false, false];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  return (
    <Box>
      <Typography variant="h6" fontWeight={600}>
        {index + 1}. {question.question}
      </Typography>

      {question.answers.map((answer, index) => {
        return (
          <Box key={index} display="flex" alignItems={"center"}>
            <Checkbox
              checked={checked[index]}
              onChange={(e) => handleChange(e, index)}
              inputProps={{ "aria-label": "controlled" }}
              color="success"
              sx={{ color: "#6ab04c" }}
            />
            <Typography variant="body1"> {answer} </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export { Question };
