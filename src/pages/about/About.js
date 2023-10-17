import React from 'react'
import './about.css'
import cittyhoppa from "../../assets/image3.png"
const About = () => {
  return (
    <div className="container-fluid">
      <div className='row'>
      <div className="col-lg-12 mb-5 px-0" >
         <div className="profile-image ">
         <div class="background-image"></div>
        <div class="overlay"></div>
        <div class="content text-center">
            <h1 className='fw-bolder'>About Us</h1>
        </div>
       </div>
        </div>
      </div>
     
      <div className="container">
        <div className="row company bg-light align-content-sm-center">
    <div className="col-md-4 col-lg-4 d-flex mb-3">
      <div className='box p-4 w-100'>
      <h3 className='text-center'>Our vision</h3>
      <p>To be the go to traveling company in Kenya and to make traveling affordable for everyone.</p>
    </div>
    </div>
    <div className="col-md-4 col-lg-4 d-flex mb-3">
      <div className='box p-4 w-100'>
      <h3 className='text-center'>Our Mission</h3>
      <p>Our mission is to redefine the way you experience bus traveling. We are dedicated to providing you with seamless, safe and convenient booking solutions that empower your journeys.</p>
    </div>
    </div>
    <div className="col-md-4 col-lg-4 d-flex mb-3" >
      <div className='box p-4 w-100'>
        <h3 className='text-center'>Company values</h3>
        <p>Integrity.<br/> 
        Reliability. <br/>
        Safety first. <br/>
        Customer satisfaction</p>
        </div>
      </div>
      </div>
    
        <div class="row bg-light align-content-sm-center mt-5 aboutcontent">
        <div class="col-lg-7  col-md-8 col-m-12">
          <div className='abouth4 d-flex justify-content-around  mb-3'>
        <h4 class="text-white">About-us</h4>
        </div>
          <p>We are passionate about making your travel experience smooth,
             convenient and memorable. Whether you're a daily commuter or an adventure 
             seeker exploring new destinations we've got you covered</p>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quae dolorem illum beatae quidem ex harum consectetur necessitatibus minus, 
    provident, vitae optio. At sapiente deleniti doloremque nemo nobis similique,
     tenetur incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quae dolorem illum beatae quidem ex harum consectetur necessitatibus minus, 
    provident, vitae optio. At sapiente deleniti doloremque nemo nobis similique, tenetur incidunt</p>
          </div>
        <div class="col-lg-5 col-md-4 col-sm-12 ">
        <div className="profile-image text-center">
          <img src={cittyhoppa} alt="images 3.png" className="Img img-fluid"/>
        </div>
        </div>
      </div>

      </div>
      </div>
      
    

        )
}
export default About