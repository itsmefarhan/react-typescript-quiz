import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const useStyles = makeStyles(() => ({
  paper: {
    width: "max-content",
    margin: "auto",
    padding: "20px",
  },
}));

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h4" align="center" style={{ marginBottom: "10px" }}>
        Question: {questionNum} / {totalQuestions}
      </Typography>
      <Typography variant="h6">{question}</Typography>

      {answers.map((answer) => (
        <p key={answer}>
          <Button
            fullWidth
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
            variant='outlined'
            color='primary'
          >
            {answer}
          </Button>
        </p>
      ))}
    </Paper>
  );
};

export default QuestionCard;
