import React, { useState, useEffect } from "react";
import Choice from "./Choice";

const Question = ({ questions }) => {
  const [score, setscore] = useState(0);
  const [questate, setquestate] = useState({});

  useEffect(() => {
    setquestate(questions[1]);
    console.log(questate);
  }, []);

  return (
    <div className="container px-lg-5">
      <h3>Total Score: {score}</h3>
      <ol className="list-group">
        {/* {questate.map((question) => ( */}
        {/* <React.Fragment key={questate.question_id}>
          <li className="mar-2 ">{questate.question}</li> */}
        {/* <Choice
            choices={questate.choices}
            key={questate.id}
            setscore={setscore}
            score={score}
          /> */}
        {/* </React.Fragment> */}
        {/* ))}{" "} */}
        <br />
        <br />
      </ol>
    </div>
  );
};

export default Question;
