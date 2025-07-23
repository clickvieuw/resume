import { Link } from "react-router-dom";
import "./PricingCardStyles.css";
import React from 'react'

const PricingCardStyles = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">$ 250 +</p>
            <p>- Basic website -</p>
            <p>- 5-10 Days -</p>
            <p>- 3 Pages + -</p>
            <p>- Featured  -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className="btn">
              PURCHASE NOW
            </Link>
        </div>

        <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc">$ 750 +</p>
            <p>- Full-stack development -</p>
            <p>- 1-3 Weeks -</p>
            <p>- 5 Pages + -</p>
            <p>- Featured  -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className="btn">
              PURCHASE NOW
            </Link>
        </div>

        <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="btc">$ 2,500 +</p>
            <p>- Scalable full-stack app with complex logic -</p>
            <p>- 3-6 Weeks -</p>
            <p>- 8 Pages + -</p>
            <p>- Featured  -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className="btn">
              PURCHASE NOW
            </Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCardStyles
