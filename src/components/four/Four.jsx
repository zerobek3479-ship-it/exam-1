import React from 'react';
import { FiTruck, FiCreditCard, FiRefreshCw, FiPercent } from "react-icons/fi";
import './Four.css';

const Four = () => {
  return (
    <section className="four-section">
      <div className="four-item cyan-bg">
        <div className="four-icon">
          <FiTruck />
        </div>
        <div className="four-text">
          <h4 className="four-title">FREE SHIPPING</h4>
          <p className="four-desc">Capped At $105 Per Order</p>
        </div>
      </div>

      <div className="four-item dark-bg">
        <div className="four-icon">
          <FiCreditCard />
        </div>
        <div className="four-text">
          <h4 className="four-title">CONVENIENT PAYMENT</h4>
          <p className="four-desc">Fast And Safe</p>
        </div>
      </div>

      <div className="four-item cyan-bg">
        <div className="four-icon">
          <FiRefreshCw />
        </div>
        <div className="four-text">
          <h4 className="four-title">7-DAY RETURNS</h4>
          <p className="four-desc">Shop With Confidence</p>
        </div>
      </div>

      <div className="four-item dark-bg">
        <div className="four-icon">
          <FiPercent />
        </div>
        <div className="four-text">
          <h4 className="four-title">FREE DISCOUNT CODE</h4>
          <p className="four-desc">Weekly Offer</p>
        </div>
      </div>
    </section>
  );
};

export default Four;  