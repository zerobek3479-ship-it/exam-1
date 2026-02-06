import './Sale.css'

const Sale = ({two}) => {
  return (
   <div className="sale-wrapper">
      <div className="sale-grid">
        {
          two.map((item, index) => {
            return (
              <div key={index} className="sale-card">
                <div className="sale-text">
                  <p className="s-mini">{item.title}</p>
                  <h3 className="s-big">{item.bigtitle}</h3>
                  <button className="s-btn">{item.button}</button>
                </div>
                {/* Agar rasm bo'lsa shu yerda chiqadi */}
                {item.img && <img src={item.img} alt="img" className="s-img" />}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sale
