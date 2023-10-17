import React from 'react'
import './register.css'
import { Link } from "react-router-dom";
const register = () => {
  return (
    <div className="ccontainer-fluid  overflow-y-hidden bg-dark h-100 w-100 pt-5">
      <div className="row">
      <div className='col-lg-2 col-md-2 ' ></div>
        <div className="col-lg-4  bgimg bg-white d-flex align-items-center" >
        <div class="background-image"></div>
        <div class="overlay"></div>
        <div className="content align-self-center text-center">
             <h2 className='h5 fw-bolder'>EFUNZA BUS <br/>TICKETING SYSTEM</h2>
        </div>
       </div>
        
        <div className='col-lg-4  col-md-4 bg-light'>
          <div className='py-5'>
        <div className="login-form text-center">
      <h1 className="">Register</h1>
      <small className=''>Register your account</small>
        </div>
       <form className='form p-4 mb-5'>
        
       <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email address"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="form-control" id="password" placeholder="Password"/>
</div>
<div class="mb-3">
  <label for="confirmpass" class="form-label">Confirm Password</label>
  <input type="password" class="form-control" id="confirmpass" placeholder="Confirm password"/>
</div>
  <div className='form-row d-flex justify-content-between'>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label class="form-check-label" for="flexCheckChecked">
          Show Password
        </label>
         </div>
             <p className="text-dark">Forgot Password?</p>
         </div>
         <input type='submit' className='btn btn-primary mt-4 content-center fw-1 w-100 my-2 text-capitalize'value='REGISTER'/>
      <div className='text-center'>
        Already have an account? &nbsp;
        <Link to="/" className='text-primary'> Login   </Link>
        </div>
        
       </form>
       </div>
       </div>
       <div className='col-lg-2 col-md-2'></div>
       </div>
       </div>
    )
}

export default register