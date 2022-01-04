import React,{useState} from "react";

const Login = () => {
  const[userId,setUserId] = useState("");
    const[passId,setPassId] = useState("");
    const[emailId,setEmailId] = useState("");
    const[emailerror,setemailerror] = useState(false);
    const[usererror,setusererror] = useState(false);
    const[passerror,setpasserror] = useState(false);
    function logInHandler(e){
        if(userId<3 || passId<3 || emailId<8){
            alert("input data is invalid");
        }
        else{
            alert("your data is successfully submitted");
        }
        e.preventDefault();
    }
    function userInp(e){
        let username = e.target.value;
        if(username.length<3){
            setusererror(true)
        }
        else{
            setusererror(false);
        }
        setUserId(e.target.value)
        // console.log(e.target.value);
    }
    function emailInp(e){
      let email = e.target.value;
      if(email.length<8){
         setemailerror(true)
      }
      else{
        setemailerror(false);
      }
      setEmailId(e.target.value);
    }
    function passInp(e){
        let password = e.target.value;
        if(password.length<3){
            setpasserror(true);
        }
        else{
            setpasserror(false);
        }
        setPassId(e.target.value);
    //    console.log(e.target.value);
    }
  return (
    <div>
       <h1>Log in</h1>
       <form onSubmit={logInHandler}>
           <input type="text" placeholder="Your Username" onChange={userInp}/>
           {
               usererror ? <p>Invalid Username</p> : null
           }
           <br />
           <input type="email" placeholder="Your email" onChange={emailInp}/>
           {
             emailerror ? <p>Invalid email</p> : null
           }
           <br />
           <input type="password" placeholder="Your Password" onChange={passInp}/>
           {
               passerror ? <p>Invalid Password</p> : null
           }
           <br />
           <button type="submit">Login</button>
       </form>
         
       </div>
  );
};

export default Login;
