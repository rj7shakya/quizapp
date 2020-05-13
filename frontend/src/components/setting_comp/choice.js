import React, { useState } from "react";
import axios from "axios";

const Choice = ({ choices }) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <ul>
        {choices.map((choice) => (
          <React.Fragment key={choice.choice_id}>
            <div className="list-group-item set">{choice.choice}</div>
          </React.Fragment>
        ))}{" "}
      </ul>
      <div className="font alert">
        <form action="" onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add question here "
              name="choice"
            ></input>
          </div>
          <input type="submit" value="Add option" className="btn btn-dark " />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Choice;
