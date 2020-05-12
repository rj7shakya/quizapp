import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Choice = ({ id }) => {
  let [option, setoption] = useState([]);
  let data = [];
  // useEffect(() => {
  getChoice(1)
    .then(function (response) {
      // data = [...response];
      // // console.log(choice);
      return <ul>asd</ul>;
      console.log(id);
      // setoption(response);
      // console.log(option);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(id);
  return <ul>{data}</ul>;
  // }, []);
};

const getChoice = async (id) => {
  const res = await axios.get(`/choice/${id}`);
  return [...res.data.rows];
};

export default Choice;
