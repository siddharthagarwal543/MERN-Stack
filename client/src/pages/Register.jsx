import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

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
    console.log(user);
    try{
      const response=await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user)
      });
      if(response.ok){
        const responseData=await response.json();
        alert("registration successful");
        setUser({username:"",email:"",phone:"",password:""});
        console.log(responseData);
        Navigate("/login");
      }
      else{
        console.log("Error inside response","error");
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
              <div className="registration-image">
                <img src="../../public/Images/register.jpg" alt="register" width="500" height="500"></img>
              </div>
              <div className="register-from">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br/>

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor='username'>Username</label>
                    <input type="text" name='username' placeholder='enter your username' id='username' required autoComplete='off' value={user.username} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor='email'>email</label>
                    <input type="text" name='email' placeholder='enter your email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type="number" name='phone' placeholder='enter your Phone Number' id='phone' required autoComplete='off' value={user.phone} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder='enter your password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                  </div>
                  <br/>
                  <button type='submit' className="btn btn-submit">Register Now</button>
                </form>
              </div>

            </div>
          </div>
        </main>
      </section>
  )
}

export default Register
