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
        <Question questions={this.state.questions} key={this.state.questions} />
      </div>
    );
  }
  async componentDidMount() {
    try {
      const res = await axios.get("/question");
      this.setState({ questions: [...res.data.questions] });
    } catch (error) {
      console.log(error);
    }
  }
}

export default Quiz;
