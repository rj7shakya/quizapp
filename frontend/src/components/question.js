import React from "react";
import Choice from "./Choice";
import axios from "axios";

const question = ({ questions, id }) => {
  return (
    <div>
      <ul>
        {questions.map((question) => (
          <>
            <li>{question.question}</li>
            <Choice id={question.question_id} key={question.id} />
          </>
        ))}{" "}
      </ul>
    </div>
  );
};

export default question;
