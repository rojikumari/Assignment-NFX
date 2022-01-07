import React from "react";
import { useFormik } from "formik";

const Login = () => {
  const userSignUpData = JSON.parse(localStorage.getItem("form"));
  console.log(userSignUpData);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: (values) => {
      // verifyDetails(values)
      // console.log(values);
      // const userExistingDetail = {
      //   userSignUpEmail : values.email,
      //   userSignUpPassword : values.password,
      // }
      const verifyUserEmail = values.email;
      const verifyUserPassword = values.password;
      console.log(verifyUserEmail);
      console.log(verifyUserPassword);
      const checkUser = userSignUpData[verifyUserEmail];
      // const checkUserExistingPassword = userSignUpData[verifyUserPassword];

      if (checkUser) {
        // console.log(checkUserExistingEmail);
        if (checkUser.userPassword === verifyUserPassword) {
          alert("You are logged in Successfully");
        } else {
          alert("wrong password");
        }
      } else {
        alert("please enter valid login credentials");
      }
    }
  });
  return (
    <div>
      <h2>Login </h2>

      <form onSubmit={formik.handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
