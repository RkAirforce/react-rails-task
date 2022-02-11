import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Task() {
  const [createtask, setCreatetask] = useState("");
  const [issues, setIssues] = useState([]);
  const [updateissue, setUpdateissue] = useState("");

  useEffect(()  =>  {
    async function fetchData()  {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/tasks`)
        console.log(result)
        console.log(result.data)
        setIssues(result.data);
      }
      fetchData();
   }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Todo />
      </header>
    </div>
  );
}