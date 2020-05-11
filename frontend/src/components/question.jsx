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
            {question.choice}
            {/* <Choice options={question.choice} key={question.id} /> */}
          </>
        ))}{" "}
      </ul>
    </div>
  );
};

const getChoice = async (id) => {
  const res = await axios.get(`/question/${id}`);
  console.log(res);
};

export default question;
