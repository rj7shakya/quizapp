import React, { Component } from "react";
import Question from "../question";
import axios from "axios";

class Quiz extends Component {
  state = {
    questions: [],
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
  async componentDidMount() {
    try {
      console.log("mounting");
      const res = await axios.get("/question");
      console.log(res.data.rows);
      this.setState({ questions: [...res.data.rows] });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Quiz;
