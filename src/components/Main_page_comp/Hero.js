import { Link } from "react-router-dom"
function Hero() {
    return (
      <>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-desc">
              <p className="title">Little Lemon</p>
              <p className="subtitle">Chicago</p>
              <p className="desc">We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.</p>
              <Link to="/booking" >
                <button className="reserve-btn btn">
                  Reserve a table
                </button>
              </Link>
            </div>
            <div className="img-wrapper">
              <img className="hero-img" src="" alt="hero image"/>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Hero;