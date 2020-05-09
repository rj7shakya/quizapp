import React from "react";

const Choice = ({ options }) => {
  console.log(options);
  return (
    <ul>
      {options.map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
};

export default Choice;
