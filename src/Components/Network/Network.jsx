import React from "react";
import "../../Style/grid.scss";
import "./Network.scss";

const Network = () => {
  return (
    <section className="network">
      <div className="container-lg container-fluid">
        <div className="row">
          <div className="col-12 col-lg-5 text">
            <div class="subtitle">What We Do</div>
            <h2>
              Why Join Our <br></br>Cirkle from Social Network ?
            </h2>
            <p>
              Social hen an unknown printer took a galley of type and scrambled
              make type specimen book. It has survived not only five centuries
              but also the leap into electronic typesetting, remaining
              essentialunchanged they popularised with release.
            </p>
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
          <div className="col-12 col-lg-7 right-part">
            <div className="item d-flex align-items-center justify-content-end-lg justify-content-center">
              <div className="icon col-6">
                <i class="fa-solid fa-comments"></i>
              </div>
              <div class="col-6 text">
                <h3>Meet Great People</h3>
                <p>
                  when an unknown printer took a galley of scrambled it to make
                  a type specimen It has survived not only.
                </p>
              </div>
            </div>
            <div className="item d-flex align-items-center justify-content-end-lg justify-content-center activ">
              <div className="icon col-6">
              <i class="fa-solid fa-users"></i>
              </div>
              <div class="col-6 text">
                <h3>Forum Discussion</h3>
                <p>
                  when an unknown printer took a galley of scrambled it to make
                  a type specimen It has survived not only.
                </p>
              </div>
            </div>
            <div className="item d-flex align-items-center justify-content-end-lg justify-content-center">
              <div className="icon col-6">
              <i class="fa-solid fa-scroll"></i>
              </div>
              <div class="col-6 text">
                <h3>Active Groups</h3>
                <p>
                  when an unknown printer took a galley of scrambled it to make
                  a type specimen It has survived not only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
