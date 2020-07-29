import React, { useState } from "react";
import { fetchQuestions } from "./API";
import Question from "./components/Question";
import Spinner from "./components/Spinner";
import { Typography, Button } from "@material-ui/core";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const totalQuestions = 5;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<any>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const allQuestions = await fetchQuestions(totalQuestions);

    setQuestions(allQuestions);
    // Set score, user answers, question number and loading to initial state
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: { currentTarget: { value: any } }) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((previousState) => previousState + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((previousState) => [...previousState, answerObject]);
    }
  };

  const nextQuestion = () => {
    const next = number + 1;
    // if on last question, game over otherwise move to next question
    if (next === totalQuestions) {
      setGameOver(true);
    } else {
      setNumber(next);
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <Typography variant="h3" align="center" style={{ color: "white" }}>
        React TypeScript Quiz App
      </Typography>
      {gameOver || userAnswers.length === totalQuestions ? (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button variant="contained" color="primary" onClick={startQuiz}>
            Start
          </Button>
        </div>
      ) : null}
      {!gameOver ? (
        <Typography
          variant="h6"
          align="center"
          style={{ margin: "20px 0", color: "white" }}
        >
          Score: {score}
        </Typography>
      ) : null}
      {loading ? <Spinner /> : null}
      {!loading && !gameOver && (
        <Question
          questionNum={number + 1}
          totalQuestions={totalQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== totalQuestions - 1 ? (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Button variant="contained" color="primary" onClick={nextQuestion}>
            Next Question
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
