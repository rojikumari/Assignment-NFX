import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {box,userInp,btn} from "../signup/style"
import AppDispatcher from "@redux/dispatchers/appDispatcher"
const Login = () => {
  const userSignUpData = JSON.parse(localStorage.getItem("form"));
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
      const verifyUserEmail = values.email;
      const verifyUserPassword = values.password;
      console.log(verifyUserEmail);
      console.log(verifyUserPassword);
      const checkUser = userSignUpData[verifyUserEmail];
      if (checkUser) {
        if (checkUser.userPassword === verifyUserPassword) {
          alert("You are logged in Successfully");
          AppDispatcher.updateUserTokens();

        } else {
          alert("wrong password");
        }
      } else {
        alert("please enter valid login credentials");
      }
    }
  });
  return (
    <Box sx={box} style={{backgroundColor : "#f0b9d5"}} >
      <h2>Login </h2>

      <form onSubmit={formik.handleSubmit}>
        <input  style={userInp}
          type="email"
          placeholder="Your Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <br />
        <input  style={userInp}
          type="password"
          placeholder="Your password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <br />
        <Box sx={{textAlign:'center'}}>
        <Button sx={btn}
            variant="contained" type="submit">Log in</Button>
        </Box>
        
      </form>
    </Box>
  );
};

export default Login;
