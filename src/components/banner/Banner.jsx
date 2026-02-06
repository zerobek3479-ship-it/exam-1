import React from "react";
import "./Banner.css";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="b-asos">
      <div className="b-konteyner">
        
        
        <div className="b-chap">
          <h2 className="b-sarlavha">Apple MacBook Air M1 256GB 2023</h2>
          <div className="b-royxat">
            <div className="b-punkt">
              <HiOutlineShieldCheck className="b-icon" />
              <span>24 months warranty</span>
            </div>
            <div className="b-punkt">
              <MdOutlinePayments className="b-icon" />
              <span>Interest installment payment</span>
            </div>
            <div className="b-punkt">
              <AiOutlineSafetyCertificate className="b-icon" />
              <span>100% original seal</span>
            </div>
          </div>
        </div>

        
        <div className="b-ong">
          <div className="b-narx">
            <span className="eski-narx">$755.00</span>
            <h1 className="yangi-narx">$655.00</h1>
            <p className="chegirma-matn">10% off when paying by credit card</p>
          </div>
          <button className="b-tugma">Shop Now</button>
        </div>

      </div>
    </div>
  );
};

export default Banner;