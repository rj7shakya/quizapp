import React from "react";
import Choice from "./Choice";

const question = ({ questions }) => {
  return (
    <div className="container px-lg-5">
      <ol className="list-group">
        {questions.map((question) => (
          <React.Fragment key={question.question_id}>
            <li className="mar-2 ">{question.question}</li>
            <Choice choices={question.choices} key={question.id} />
          </React.Fragment>
        ))}{" "}
        <br />
        <br />
      </ol>
    </div>
  );
};

export default question;
