import { Box, Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";

//Interfaces
import { IQuestion } from "../../interfaces";

// Redux
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setUserAnswers } from "../../reducers";

interface Props {
  question: IQuestion;
  index: number;
  answer?: number | null;
}

const Question = ({ question, index, answer }: Props) => {
  const dispatch = useAppDispatch();
  const { currentTest: test, userAnswers } = useAppSelector(
    (state) => state.study
  );

  const [checked, setChecked] = useState([false, false, false, false]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index2: number
  ) => {
    let newChecked = [false, false, false, false];
    newChecked[index2] = event.target.checked;
    setChecked(newChecked);
    if (event.target.checked) {
      dispatch(setUserAnswers({ ...userAnswers, [index]: index2 }));
    } else {
      dispatch(setUserAnswers({ ...userAnswers, [index]: null }));
    }
  };

  useEffect(() => {
    if (answer) {
      const newChecked = [false, false, false, false];
      newChecked[answer] = true;
      setChecked(newChecked);
      return;
    }
    setChecked([false, false, false, false]);
  }, [test, answer]);

  return (
    <Box>
      <Typography variant="h6" fontWeight={600}>
        {index + 1}. {question.question}
      </Typography>

      {question.answers.map((answer, index2) => {
        return (
          <Box key={index2} display="flex" alignItems={"center"}>
            <Checkbox
              checked={checked[index2]}
              onChange={(e) => handleChange(e, index2)}
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
