import React from "react";
import "./Navbar.scss";
import "../../Style/grid.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="conatiner-fluid">
        <div className="row justify-content-between ">
          <div className="col-4 col-sm-8 d-flex align-items-center">
            <div className="col-6 d-block d-lg-none bars"><i className="fa-solid fa-bars " style={{ color: 'white' }}></i>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Commnity</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact Us</a></li></ul></div>
            <div className="col-6 col-lg-3 logo">
              <img
                src="https://radiustheme.com/demo/html/cirkle/media/logo.png"
                alt="logo"
              />
            </div>
            <div className="col-8 d-none d-lg-block list">
              <ul className="d-flex">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 right-part d-flex justify-content-end align-items-center">
            <div className="col-4 d-none d-xl-block icons align-items-center">
              <ul className="d-flex justify-content-between">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-skype"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4 d-flex align-items-center login-part">
              <div className="icon d-none d-sm-block"><i class="fa-solid fa-magnifying-glass"></i></div>
              <div className="login">Login</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
