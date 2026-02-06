import React from 'react';
import './Apples.css';
import { AiFillStar } from 'react-icons/ai';

import { PRODUCT } from "../../components/index"
const Apples = () => {
  return (
    <div className="a-asos">
      <div className="f-tepa">
        <h2 className="f-sarlavha">Tezkor Savdo</h2>
        <div className="f-tugmalar">
          <button className="t-chap">👈</button>
          <button className="t-ong">👉</button>
        </div>
      </div>
      <div className="a-blok">
        
        
        <div className="a-banner">
          
          <div className="a-matn">
            <h2>Iphone 14 Plus</h2>
            <p>Available in Stock!</p>
          </div>
        </div>

       
        <div className="a-grid">
          {PRODUCT.map((item, index) => (
            <div key={index} className="c-item">
              <div className="c-rasm">
                <img src={item.img} alt="pro" />
              </div>
              <div className="c-info">
                <div className="c-narx">
                  <b className="yangi">${item.price}</b>
                  <span className="eski">${item.old}</span>
                </div>
                <p className="c-nomi">{item.title}</p>
                <div className="c-reyt">
                   <div className="yulduz"><AiFillStar /><AiFillStar /><AiFillStar /></div>
                   <span className="sharh">{item.reviews} Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Apples;