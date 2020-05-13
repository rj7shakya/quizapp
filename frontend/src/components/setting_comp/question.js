import React, { useEffect, useState } from "react";
import Choice from "./choice";
import axios from "axios";

const Question = ({ questions, history }) => {
  const [num, setnum] = useState(0);
  useEffect(() => {
    setnum(questions.length);
  }, [questions]);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.question.value);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const question = {
      question: e.target.question.value,
    };
    await axios
      .post("/question", question, config)
      .then((res) => {
        console.log("done", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <ol className="list-group">
        {questions.map((question) => (
          <React.Fragment key={question.question_id}>
            <li className="">{question.question}</li>
            <Choice
              choices={question.choices}
              id={question.question_id}
              key={question.id}
            />
            <hr className="new1"></hr>
          </React.Fragment>
        ))}{" "}
      </ol>
      <div className="font">
        <form action="" onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add question here "
              name="question"
            ></input>
          </div>
          <input
            type="submit"
            value="Add question"
            className="btn btn-primary "
          />
        </form>
      </div>
    </div>
  );
};

export default Question;
