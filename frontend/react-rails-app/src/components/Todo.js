import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

export default function ButtonEvent ()  {
  const top = () => {
    console.log("イベント発火")
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/top`)
    .then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log("registration error", error)
    }).catch(data =>  {
      console.log(data)
    })
  }

  return (
    <Button
      onClick={() => top()}
      variant='outlined'
      color=""
    >
      テスト
    </Button>
  );
}