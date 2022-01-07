import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { box, btn } from "./style";
const Counter = () => {
  const [data, setData] = useState(0);
  return (
    <Box sx={box}>
      <h1>{data}</h1>
      <Button
        sx={btn}
        variant="contained"
        onClick={() => {
          data > 0 ? setData(data - 1) : setData(0);
        }}>
        Decrement 👎
      </Button>
      <Button sx={btn} variant="contained" onClick={() => setData(data + 1)}>
        Increment 👍
      </Button>
    </Box>
  );
};
export default Counter;
