import React from "react";
import "../../Style/grid.scss";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="text col-12 col-lg-6">
            <h1>Cirkle Community</h1>
            <p>
              Having real social contacts can sometimes be difficult FUN,
              everything becomes much simpler!
            </p>
            <div>
              <h2>10,95,219</h2>
              <p>Connected People</p>
            </div>
            <a href="#" className="read">
              <span className="text">Read More </span>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21px"
                  height="10px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M16.671,9.998 L12.997,9.998 L16.462,6.000 L5.000,6.000 L5.000,4.000 L16.462,4.000 L12.997,0.002 L16.671,0.002 L21.003,5.000 L16.671,9.998 ZM17.000,5.379 L17.328,5.000 L17.000,4.621 L17.000,5.379 ZM-0.000,4.000 L3.000,4.000 L3.000,6.000 L-0.000,6.000 L-0.000,4.000 Z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="col-12 col-lg-6 img d-none">
            <img className="d-none d-md-block"
              src="https://radiustheme.com/demo/html/cirkle/media/banner/people_1.png"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
