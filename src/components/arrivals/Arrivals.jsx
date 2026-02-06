import React from 'react';
import "./Arrivals.css";

const Arrivals = () => {
 

  return (
    <div className='arrivals-wrapper'>
     
   
      <section className="banner-container">
        <div className="banner-box">
          <div className="banner-bg-text">NewArrivals</div>
          
          <div className="banner-content">
            <span className="b-subtitle">New Collection 2023</span>
            <h2 className="b-title">Apple Watch Series 8 <span className="apple-icon"></span></h2>
            <p className="b-desc">
              Fine workmanship is waterproof and dustproof. 
              The watch is improved with many features to ensure accuracy when monitoring users' health.
            </p>
            
            <div className="b-price-row">
              <div className="price-tag sale-tag">
                <span>Sale up to</span>
                <strong>60%</strong>
              </div>
              <div className="price-tag amount-tag">
                <span className="old-price">$305.00</span>
                <strong className="new-price">$259.00</strong>
              </div>
            </div>
            
            <button className="b-shop-btn">Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arrivals;