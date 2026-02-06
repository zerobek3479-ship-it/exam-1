import React from 'react';
import './Second.css';
import { AiFillStar } from 'react-icons/ai';

const Second = ({ data }) => {
  return (
    <div className="s-asos">
      <div className="f-tepa">
        <h2 className="f-sarlavha">Tezkor Savdo</h2>
        <div className="f-tugmalar">
          <button className="t-chap">👈</button>
          <button className="t-ong">👉</button>
        </div>
      </div>
      <div className="s-setka">
        {data.map((item, index) => (
          <div key={index} className="s-karta">
            <div className="s-rasm"></div>
            <div className="s-info">
              <div className="s-tepa">
                <b className="s-ism">{item.name}</b>
                <span className="s-nuqta">•</span>
                <span className="s-kasb">{item.job}</span>
                <span className="s-nuqta">•</span>
                <div className="s-yulduz">
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
              </div>
              <p className="s-matn">"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Second;