import React, { useState, useEffect } from "react";
import Choice from "./Choice";

const Question = ({ questions }) => {
  const [score, setscore] = useState(0);
  const [quesindex, setquesindex] = useState(0);
  const [isFinished, setisFinished] = useState(false);
  const [buttonText, setbuttonText] = useState("Next");

  useEffect(() => {
    if (quesindex >= questions.length - 1) {
      setbuttonText("Finish");
    }
  }, [quesindex]);

  const clicked = () => {
    if (quesindex < questions.length - 1) {
      setquesindex(quesindex + 1);
    }
    if (buttonText === "Finish") {
      setisFinished(true);
    }
  };

  const playAgain = () => {
    setscore(0);
    setbuttonText("Next");
    setquesindex(0);
    setisFinished(false);
  };

  return (
    <div className="container px-lg-5">
      <h3 className="pad2">Total Score: {score}</h3>
      <h4>
        Questions {quesindex + 1}/{questions.length}
      </h4>
      <ul className="list-group">
        {/* {questate.map((question) => ( */}
        {!isFinished && questions[quesindex] && (
          <React.Fragment key={questions[quesindex].question_id}>
            <li className="mar-2 ">{questions[quesindex].question}</li>
            <Choice
              choices={questions[quesindex].choices}
              key={questions[quesindex].id}
              setscore={setscore}
              score={score}
            />
            <button onClick={clicked} type="button" className="btn btn-dark">
              {buttonText}
            </button>
          </React.Fragment>
        )}
        {isFinished && (
          <div className="m-5 center">
            Finished
            <br />
            <button
              onClick={playAgain}
              type="button"
              className="btn btn-dark my-3"
            >
              Play Again
            </button>
          </div>
        )}

        <br />
        <br />
      </ul>
    </div>
  );
};

export default Question;
