import React from "react";
import { useSelector } from "react-redux";
import dispatch from "@redux/dispatchers/appDispatcher";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {box,btn} from "./style"
const ReduxCounter = () => {
  const newState = useSelector((state) => state.ChangeNumber);
  return (
    <Box sx={box}>
      <h1>Redux Counter</h1>
      <Box sx={{fontSize : 24}}>
        <h1>{newState}</h1>
        <Button sx={btn} variant="contained"
          onClick={() => {
            dispatch.updateIncrement();
          }}>
          Increment
        </Button>
        <Button sx={btn} variant="contained"
          onClick={() => {
            dispatch.updateResetNumber();
          }}>
          Reset
        </Button>
        <Button sx={btn} variant="contained"
          onClick={() => {
            dispatch.updateDecrement();
          }}>
          Decrement
        </Button>
      </Box>
    </Box>
  );
};
export default ReduxCounter;
