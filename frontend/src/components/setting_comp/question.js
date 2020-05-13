import React, { useEffect, useState } from "react";
import Choice from "./choice";
import axios from "axios";

const Question = ({ questions }) => {
  const [questionstate, setquestionstate] = useState([]);
  useEffect(() => {
    setquestionstate(questions);
  }, []);

  useEffect(() => {}, [questionstate]);

  const onSubmit = async (e) => {
    e.preventDefault();
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
        setquestionstate([...questionstate, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="font">
      <div className="font marb2">
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
      <ol className="list-group">
        {questionstate &&
          questionstate.map((question) => (
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
    </div>
  );
};

Question.defaultProps = {
  choices: [],
};

export default Question;
