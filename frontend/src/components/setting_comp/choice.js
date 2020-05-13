import React, { useState, useEffect } from "react";
import axios from "axios";

const Choice = (props) => {
  const [text, settext] = useState("");
  const [buttonc, setbuttonc] = useState("");
  const [todisble, settodisble] = useState(false);
  const [choicestate, setchoicestate] = useState([]);
  const { choices, id } = props;
  useEffect(() => {
    setchoicestate(choices);
  }, []);

  useEffect(() => {
    if ((choicestate && choicestate.length) >= 5) {
      settext("max 5 choices allowed");
      settodisble(true);
      setbuttonc("alert-danger");
    } else if ((choicestate && choicestate.length) < 2) {
      settext("min 2 choices needed");
      settodisble(false);
      setbuttonc("alert-danger");
    } else {
      settext("");
      settodisble(false);
      setbuttonc("");
    }
  }, [choicestate]);

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
        console.log("done", res.data.result);
        setchoicestate([...choicestate, res.data.result]);
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
    await axios
      .delete(`/choice/${choice_id}`)
      .then((res) => {
        let filteredAry = choicestate.filter((e) => e.choice_id !== choice_id);
        setchoicestate([...filteredAry]);
        console.log(filteredAry);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <ul>
        {choicestate &&
          choicestate.map((choice) => (
            <React.Fragment key={choice.choice_id}>
              <div
                onClick={() => {
                  delete_choice(id, choice.choice_id);
                }}
                className="list-group-item set"
              >
                {choice.choice}
              </div>
            </React.Fragment>
          ))}{" "}
        <div className={"alert " + buttonc} role="alert">
          {text}
        </div>
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
            disabled={todisble}
            value="Add option"
            className="btn btn-dark "
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Choice;
