import React from "react";
import Choice from "./Choice";

const question = ({ questions, id }) => {
  return (
    <div>
      <ul>
        {questions.map((question) => (
          <React.Fragment key={question.question_id}>
            <li>{question.question}</li>
            <Choice choices={question.choices} key={question.id} />
          </React.Fragment>
        ))}{" "}
      </ul>
    </div>
  );
};

export default question;
