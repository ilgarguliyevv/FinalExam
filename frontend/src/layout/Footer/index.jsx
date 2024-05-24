import React from 'react'
import "./footer.scss";

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-all">
        <div className="footer-first">
          <h1>Tasty</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="footer-second">
          <h1>Opening Hours</h1>
          <p>Monday: 08:00 - 22:00</p>
          <p>Monday: 08:00 - 22:00</p>
          <p>Monday: 08:00 - 22:00</p>
          <p>Monday: 08:00 - 22:00</p>
          <p>Monday: 08:00 - 22:00</p>
          <p>Monday: 08:00 - 22:00</p>
          <p>Monday: 08:00 - 22:00</p>
        </div>
        <div className="footer-third">
          <h1>Contact Information</h1>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          <p>+ 1235 2355 98</p>
          <p>info@yoursite.com</p>
          <p>email@email.com</p>
        </div>
        <div className="footer-four">
          <h1>Newsletter</h1>
          <p>Far far away, behind the word mountains, far from the countries.</p>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer