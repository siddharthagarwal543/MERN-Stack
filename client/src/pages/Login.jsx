import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

function Login() {
  const [user,setUser]=useState({
    email:"",
    password:""
  });
  const {storeTokenInLS}=useAuth();
  const Navigate=useNavigate();

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // alert(user);
    try{

      const response=await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
      });
      if(response.ok){
        // const responseData=await response.json();
        // alert("registration successful");
        const res_data=await response.json();
        storeTokenInLS(res_data.token);
        setUser({username:"",password:""});
        // console.log(responseData);
        alert("Login Successful")
        Navigate("/");
      }
      else{
        alert("Invalid Credientials");
      }
    }
    catch(error){
      console.log("Error",error);
    }
  }
  return (
    <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img src="../../public/Images/login.jpg" alt="Login" width="500" height="500"></img>
              </div>
              <div className="registration-from">
                <h1 className="main-heading mb-3">Sign in</h1>
                <br/>

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor='email'>Username</label>
                    <input type="text" name='email' placeholder='enter your email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder='enter your password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                  </div>
                  <br/>
                  <button type='submit' className="btn btn-submit">Sign in</button>
                </form>
              </div>

            </div>
          </div>
        </main>
      </section>  
  )
}

export default Login
