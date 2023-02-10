import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Message() {
  const [result, setresult] = useState(null);
  const message = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/");
      let result = res.data;
      setresult(result);
    } catch (e) {
      console.log(e);
    }
  };
  

  useEffect(() => {
    message();
  }, []);
  return <div>{result}</div>;
}
