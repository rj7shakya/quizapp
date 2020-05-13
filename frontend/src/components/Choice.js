import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Choice = ({ choices }) => {
  return (
    <ul>
      {choices.map((choice) => (
        <React.Fragment key={choice.choice_id}>
          <div>
            {" "}
            <button>{choice.choice}</button>
          </div>
        </React.Fragment>
      ))}{" "}
    </ul>
  );
};

export default Choice;
