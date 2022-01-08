import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {box,userInp,btn} from "./style"
const SignUp = () => {
  let redirect = useHistory();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      const userFormDetail = {
        userName: values.fullname,
        useremail: values.email,
        userPassword: values.password
      };
      const userDetail = localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form"))
        : {};
      if (userDetail[values.email]) {
        alert("The Following email exist already");
      } else {
        userDetail[values.email] = userFormDetail;
        alert("Congratulation you are logged In");
        redirect.push("/auth/login");
      }
      localStorage.setItem("form", JSON.stringify(userDetail));
    }
  });
  return (
    <Box
      sx={box}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          style={userInp}
          type="text"
          placeholder="Your name"
          id="fullname"
          name="fullname"
          onChange={formik.handleChange}
          value={formik.values.fullname}
          required
        />
        <br />
        <input
          style={userInp}
          type="email"
          placeholder="Your email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <br />
        <input
          style={userInp}
          type="password"
          placeholder="Your Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <br />
        <Box sx={{ textAlign: "center" }}>
          <Button
            sx={btn}
            type="submit"
            variant="contained">
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default SignUp;
