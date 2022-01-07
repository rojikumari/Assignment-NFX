// import React, { useEffect } from "react";
import React from "react";
import { useFormik } from "formik";

const SignUp = () => {
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
      console.log(userFormDetail.userName);
      console.log(values.email);
      const userDetail = localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form"))
        : {};
      if (userDetail[values.email]){
        alert("The Following email exist already");
      } 
      else {
        userDetail[values.email] = userFormDetail;
        alert("Congratulation you are logged In");
      }
      localStorage.setItem("form", JSON.stringify(userDetail));
      window.location.href = "http://localhost:3000/auth/login";
    }
  });
  // useEffect(() => {
  //   localStorage.setItem("form", JSON.stringify(values));
  // }, [values];

  // function submitForm(e) {
  //   e.preventDefault();
  // }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Your name"
          id="fullname"
          name="fullname"
          onChange={formik.handleChange}
          value={formik.values.fullname}
          required
        />
        <br />
        <label>Email : </label>
        <input
          type="email"
          placeholder="Your email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <br />
        <label>Password : </label>
        <input
          type="password"
          placeholder="Your Password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
