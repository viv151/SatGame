import React from "react";
import { QuizData } from "./Data/QuizData";

const QuizResult = (props) => {
  return(
    <div className="score-section">
      <h2>Completed</h2>
      <h4>Best Score: 22</h4>
      <h4>Total Score {props.score}/22</h4>
      <h4>Your Correct Question {props.CorrectAns} out of {QuizData.length}</h4>
      <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default QuizResult;