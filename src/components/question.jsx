import React from "react";
import Choice from "./Choice";

const question = ({ questions, id }) => {
  console.log(questions);
  return (
    <div>
      <ul>
        {questions.map((question) => (
          <>
            <li>{question.question}</li>
            <Choice options={question.choice} key={question.id} />
          </>
        ))}{" "}
      </ul>
    </div>
  );
};

export default question;
