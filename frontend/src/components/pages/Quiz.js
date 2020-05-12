import React, { Component } from "react";
import Question from "../question";
import axios from "axios";

class Quiz extends Component {
  state = {
    questions: [],
    choices: [],
  };
  render() {
    return (
      <div>
        <Question
          questions={this.state.questions}
          choices={this.state.choices}
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
      let choices_load = [];
      res.data.rows.forEach(async (item, index) => {
        const res = await axios.get(`/choice/${item.question_id}`);
        // this.setState({ ...this.state, choices: [...res.data.rows] });
        choices_load.push(res.data.rows);
      });
      console.log(choices_load);
      this.setState({
        choices: JSON.parse(JSON.stringify(choices_load)),
        ...this.state,
      });
      // console.log(this.state.questions);
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Quiz;
