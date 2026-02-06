import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = ({ services, about }) => {
  return (
    <footer className="f-asos">
      {/* Instagram galereya qismi */}
      <div className="f-insta">
        <div className="i-karta dark">
          <FaInstagram className="i-icon" />
          <p>@bestxtore</p>
        </div>
        <div className="i-karta"></div>
        <div className="i-karta"></div>
        <div className="i-karta"></div>
      </div>

      <div className="f-pastki">
        <div className="f-konteyner">
          
          {/* Logo va Obuna */}
          <div className="f-chap">
            <h2 className="f-logo">BESTXTORE</h2>
            <p className="f-matn">Lorem ipsum dolor sit amet consectetur. Ultricies viverra id egestas pharetra fermentum.</p>
            <div className="f-obuna">
              <input type="email" placeholder="Your email" />
              <button>Submit</button>
            </div>
            <div className="f-social">
              <FaFacebookF /> <FaInstagram /> <FaPinterestP /> <FaTwitter /> <FaTiktok />
            </div>
          </div>

          {/* Customer Service (App dan keladi) */}
          <div className="f-ustun">
            <h3>Customer Service</h3>
            <ul>
              {services.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* About Us (App dan keladi) */}
          <div className="f-ustun">
            <h3>About Us</h3>
            <ul>
              {about.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Kontaktlar */}
          <div className="f-ustun">
            <h3>Contact Us</h3>
            <p>📍 600 N Washington Ave Suite C203</p>
            <p>📞 +008 0642 118</p>
            <p>✉️ bestxtore@gmail.com</p>
            <div className="f-vaqt">
              <h4>Service Time</h4>
              <p>🕒 24-hour (Monday - Sunday)</p>
            </div>
            <div className="f-to'lov">
              {/* To'lov iconlari o'rniga oddiy matn yoki rasmlar */}
              <span>VISA</span> <span>PayPal</span> <span>MasterCard</span>
            </div>
          </div>

        </div>
        <div className="f-copy">
          Copyright 2023 BESTXTORE. Designed By BZOTech.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;