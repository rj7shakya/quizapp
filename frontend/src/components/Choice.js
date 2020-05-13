import React, { useState } from "react";

const Choice = ({ choices, setscore, score }) => {
  const [text, settext] = useState("");
  const [buttonc, setbuttonc] = useState("");
  const [todisble, settodisble] = useState(false);

  const check = (is_correct) => {
    settodisble(true);
    if (is_correct) {
      settext("Correct");
      setbuttonc("alert-success");
      setscore(++score);
    } else {
      setbuttonc("alert-danger");
      settext("Incorrect");
    }
  };

  return (
    <ul>
      {choices.map((choice) => (
        <React.Fragment key={choice.choice_id}>
          <div>
            {" "}
            <button
              className="list-group-item btn-block btn btn-light"
              onClick={() => check(choice.is_correct)}
              disabled={todisble}
            >
              {choice.choice}
            </button>
          </div>
        </React.Fragment>
      ))}{" "}
      <div className={"alert " + buttonc} role="alert">
        {text}
      </div>
    </ul>
  );
};

export default Choice;
