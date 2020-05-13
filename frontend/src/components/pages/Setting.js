import React, { Component } from "react";
import Question from "../setting_comp/question";
import axios from "axios";

class Setting extends Component {
  state = {
    questions: [],
  };
  render() {
    return (
      <div className="container py-2">
        <h3>Quiz setting page:</h3>
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

export default Setting;
