import React from 'react'
 import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from'react-scroll';
const Footer = () => {
  return (
    <div className="bg-primary">
  <div className="container text-white">
    <footer className="pt-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>EBTS</h5>
          <p>We make yur travel experience easy</p>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>Our Main Office</h5>
          <p>Times Tower Building Haile Selassie Avenue P.O Box 89988-0000</p>
        </div>
  
        <div className="col-6 col-md-2 mb-3">
          <h5>Call Or Whatsapp Us</h5>
          <p >+254 790 205233</p>
          <p> efunzaebts@gmail.com</p>
        </div>
  
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our news updates</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
              <button className="btn btn-danger" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
  
      <div className="d-flex flex-column flex-sm-row justify-content-between py-3 my-0 border-top">
        <p>&copy; 2023 Efunza | All Rights Reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        </ul>
      </div>
    </footer>
    </div>
    </div>

  )
}

export default Footer