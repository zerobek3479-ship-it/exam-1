import "./Carts.css";
import { DATA } from "../../components/index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Cards = () => {
  return (
    <div className="wrapper">
      <div className="head">
        <h2 className="title">Tezkor Savdo</h2>
        <div className="nav">
          <button className="btn"><IoIosArrowBack /></button>
          <button className="btn"><IoIosArrowForward /></button>
        </div>
      </div>

      <div className="grid">
        {DATA.map((item, index) => (
          <div key={index} className="item">
            <div className="card">
              <div className="img-box">
                <img src={item.img} alt="" className="pic" />
                {item.skidka && <span className="tag">{item.skidka}</span>}
              </div>
              
              <div className="info">
                <div className="prices">
                  <span className="now">${item.price}</span>
                  {item.old && <span className="old">${item.old}</span>}
                </div>
                <h3 className="name">{item.title}</h3>
                <div className="rate">⭐ {item.rate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;