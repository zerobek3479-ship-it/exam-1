import React from 'react';
import { FaApple, FaPlay, FaBluetoothB, FaMicrochip } from 'react-icons/fa';
import { IoBatteryFullSharp } from 'react-icons/io5';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-main">
      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="brand-label">
            <FaApple />
            <span>Bluetooth headphone</span>
          </div>

          <h1 className="hero-title">
            AirPods Pro <br />
            <span className="text-white">2023</span>
          </h1>

          <p className="hero-subtitle">
            Delivers vivid sound quality with outstanding 3-D sound reproduction
          </p>

          <div className="features-box">
            <div className="feature-row">
              <IoBatteryFullSharp className="feature-icon" />
              <span>Battery capacity 6 hours - charging box 30 hours</span>
            </div>
            <div className="feature-row">
              <FaBluetoothB className="feature-icon" />
              <span>Bluetooth 5.3</span>
            </div>
            <div className="feature-row">
              <FaMicrochip className="feature-icon" />
              <span>Chip H2</span>
            </div>
          </div>

          <div className="hero-btns">
            <button className="btn-cyan">Shop Now</button>
            <button className="btn-white">
              <FaPlay className="play-icon" /> Video
            </button>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="wave-bg"></div>
        </div>

        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>
    </section>
  );
};

export default Hero;