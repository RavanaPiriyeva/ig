import React from "react";
import "./Footer.scss";
import "../../Style/grid.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-12 logo-part">
            <div className="logo">
              <img
                src="https://radiustheme.com/demo/html/cirkle/media/logo_dark.png"
                alt="logo"
              />
            </div>
            <p>
              Dorem ipsum dolor sit amet consec adipisicing elit sed do eiusmod
              por incidiut labore et loreLorem ipsum kelly amieo dolorey.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-12 col-md-6 list">
            <h3>Important Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12 list">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#">NewsFeed</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Friends</a>
              </li>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-12 list">
            <h3>Followers</h3>
            <ul>
              <li>
                <a href="#">facebook</a>
              </li>
              <li>
                <a href="#">twitter</a>
              </li>
              <li>
                <a href="#">instagram</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
