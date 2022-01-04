import React, { useState } from "react";
import Button from "@mui/material/Button";
// import { flexbox } from '@mui/system';
import Box from "@mui/material/Box";
// counter.module.css => folder

const Counter = () => {
  const [data, setData] = useState(0);
  return (
    <Box sx={{
        width: 350,
        height: 300,
        textAlign: 'center',
        color : 'white',
        fontSize : 40,
        backgroundColor: 'primary.dark',
        borderRadius : 5,
        padding : 5,
      }}>
      <h1>{data}</h1>
      <div>
        <Button sx={{ ml: 3 , fontSize : 17, fontWeight: 'Bol',padding : 2}}
          variant="contained"
          onClick={() => {
            data > 0 ? setData(data - 1) : setData(0);
          }}>
          Decrement 👎
        </Button>
        <Button sx={{ ml: 3 , fontSize : 17, fontWeight: 'Bol',padding : 2}} variant="contained" onClick={() => setData(data + 1)}>
          Increment 👍
        </Button>
      </div>
    </Box>
  );
};
export default Counter;
