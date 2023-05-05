import React from "react";
import "../../Style/grid.scss";
import "./Community.scss";
function Community() {
  return (
    <section className="community">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 img">
            <img
              src="https://radiustheme.com/demo/html/cirkle/media/figure/map_1.png"
              alt="community"
            />
          </div>
          <div className="col-6 text">
            <h2>
              129 Countries We Build <br></br> Our Largest Community in <br />
              <span>Cirkle Network</span>
            </h2>
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also leap electronic typesetting, remaining
              essentially.
            </p>
          </div>
          <div className="bottom-img">
            <img
              src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_7.png"
              alt="community"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
