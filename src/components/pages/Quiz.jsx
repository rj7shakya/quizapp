import React, { Component } from "react";
import Question from "../question";

class Quiz extends Component {
  state = {
    questions: [
      {
        id: 1,
        question: "what is capital of Nepal?",
        choice: ["a", "b", "c", "d"],
      },
      {
        id: 2,
        question: "what is capital of India?",
        choice: ["a", "b", "c", "d"],
      },
      {
        id: 3,
        question: "what is capital of China?",
        choice: ["a", "b", "c", "d"],
      },
      {
        id: 4,
        question: "what is capital of Australia?",
        choice: ["a", "b", "c", "d"],
      },
      {
        id: 5,
        question: "what is capital of America?",
        choice: ["a", "b", "c", "d"],
      },
    ],
  };
  render() {
    return (
      <div>
        <Question
          questions={this.state.questions}
          key={this.state.questions.id}
        />
      </div>
    );
  }
}

export default Quiz;
