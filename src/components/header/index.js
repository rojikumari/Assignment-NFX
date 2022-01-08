import React,{useState} from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';
import {link,btn} from "./style"
const Header = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <Link style={link} to="./counter">
        <Button sx={btn} variant="text">Counter</Button>
      </Link>
      <Link style={link} to="./redux-counter">
        <Button  sx={btn} variant="text">Redux-counter</Button>
      </Link>
      <Link style={link} to="./signup">
        <Button  sx={btn} variant="text">SignUp</Button>
      </Link>
      <Link style={link} to="./login">
        <Button  sx={btn} variant="text">Login</Button>
      </Link>
      <Link style={link} to="/u/dashboard">
        <Button  sx={btn} variant="text"
          onClick={() => {
            alert("Please Login First");
          }}>
          Gallery
        </Button>
      </Link>
     <Switch
      checked={checked}
      onChange={handleChange}
    /> 
    <span style={{color : 'white'}}>Dark Mode On</span>
    </Box>
  );
};
export default Header;
