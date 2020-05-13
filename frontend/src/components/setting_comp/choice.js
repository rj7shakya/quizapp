import React, { useState } from "react";
import axios from "axios";

const Choice = (props) => {
  const { choices, id } = props;
  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const choice = {
      choice: e.target.choice.value,
      is_correct: e.target.correct.checked,
    };
    await axios
      .post(`/choice/${id}`, choice, config)
      .then((res) => {
        console.log("done", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delete_choice = async (id, choice_id) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(id, choice_id);
    await axios
      .delete(`/choice/${choice_id}`)
      .then((res) => {
        console.log("deleted", res);
        window.location.reload();
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
            <div
              onClick={() => {
                delete_choice(id, choice.choice_id);
                console.log("delete_choice");
              }}
              className="list-group-item set"
            >
              {choice.choice}
            </div>
          </React.Fragment>
        ))}{" "}
      </ul>
      <div className="font opw">
        <form action="" onSubmit={onSubmit}>
          <div className=" row pad2">
            <input
              type="text"
              className="form-control w-50 "
              placeholder="Add question here "
              name="choice"
            ></input>
            <div className="pad1">
              {" "}
              <label htmlFor="correct" className="pad1">
                <input
                  type="checkbox"
                  id="correct"
                  name="correct"
                  value="correct"
                  className="checkbox "
                ></input>{" "}
                Correct ?
              </label>
            </div>
            <br></br>
            <br></br>
          </div>
          <input
            type="submit"
            onSubmit={onSubmit}
            value="Add option"
            className="btn btn-dark "
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Choice;
