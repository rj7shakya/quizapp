import React from "react";
import Choice from "./choice";

const question = ({ questions }) => {
  const addQuestion = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="">
      <ol className="list-group">
        {questions.map((question) => (
          <React.Fragment key={question.question_id}>
            <li className="mar-2 ">{question.question}</li>
          </React.Fragment>
        ))}{" "}
        <br />
        <br />
      </ol>
      <div className="font">
        Add a question{" "}
        <form action="">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Add question here "
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            ></input>
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                <i
                  onClick={(e) => {
                    e.preventDefault();
                    // addQuestion();
                  }}
                  className="fa fa-plus plus"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
          <button
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.target.value);
            }}
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <form onSubmit="addQuestion(this)">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default question;
