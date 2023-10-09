import React from 'react'
import './about.css'
import LogoImg from "../../assets/logo.png"
import bg from "../../assets/profile.png"
import background from "../../assets/carbus.png"
import Img from "../../assets/images i.png"
import cittyhoppa from "../../assets/cittyhoppa.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from'react-scroll';
import Footer from "../../components/footer/Footer"
const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 mb-5 hero-about">
         <div className="profile-image text-center">
       {/* <img src={background} alt="carbus" className="background img-fluid w-100"/> */}
    <    h1> About BUS</h1>
       </div>
        </div>
        
        <div className="row bg-light align-content-sm-center">
    <div className="col-md-4 col-lg-4 d-flex mb-3">
      <div className='card p-3 w-100'>
      <h3>Our vision</h3>
      <hr/>
      <p>To be the go to traveling company in Kenya and to make traveling affordable for everyone.</p>
    </div>
    </div>
    <div className="col-md-4 col-lg-4 d-flex mb-3">
      <div className='card p-3 w-100'>
      <h3>Our Mission</h3>
      <hr/>
      <p>Our mission is to redefine the way you experience bus traveling. We are dedicated to providing you with seamless, safe and convenient booking solutions that empower your journeys.</p>
    </div>
    </div>
    <div className="col-md-4 col-lg-4 d-flex mb-3" >
      <div className='card p-3 w-100'>
        <h3>Company values</h3>
        <hr/>
        <p>Integrity.<br/> 
        Reliability. <br/>
        Safety first. <br/>
        Customer satisfaction</p>
        </div>
      </div>
      </div>
    
        <div class="row bg-light align-content-sm-center mt-5"  >
        <div class="col-lg-4  col-md-6 col-m-12">
        <h4 class="text-primary">About-us</h4>
          <p>We are passionate about making your travel experience smooth, convenient and memorable. Whether you're a daily commuter or an adventure seeker exploring new destinations we've got you covered</p>
          <a href='/contact' className='btn btn-success mt-3'> Get in Touch</a>
          </div>
        <div class="col-lg-8 col-md-6 col-sm-12 ">
        <div className="profile-image text-center">
          <img src={cittyhoppa} alt="images i.png" className="Img img-fluid w-100"/>
        </div>
        </div>
      </div>
      </div>
      <Footer/>
      </div>
      
    

        )
}

export default About