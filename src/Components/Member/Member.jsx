import React from "react";
import "../../Style/grid.scss";
import "./Member.scss";

const Member = () => {
  return (
    <section className="member">
      <div className="container">
        <div className="title">

          <h2>Our Active Members</h2>
          <p>
            when an unknown printer took a galley of type and meeting fari scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="row items align-items-center">
          <div className="col-lg-5 col-12 item3">
            <div className="col-4 col-lg-6">
              <div className="img">
                <img src="https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg" alt="member" />
              </div>
            </div>
            <div className='col-8 col-lg-6 d-flex d-lg-block justify-content-around'>
              <div className="img col-6">
                <img src="	https://radiustheme.com/demo/html/cirkle/media/team/team_2.jpg" alt="member" />
              </div>
              <div className='img col-6 '>
                <img src="	https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg" alt="member" />
              </div>
            </div>


          </div>
          <div className="col-lg-2 item">
            <img src="https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg" alt="member" className='d-lg-block d-none' />
          </div>
          <div className="col-lg-5 col-12 item3">

            <div className='col-8 col-lg-6 d-flex d-lg-block justify-content-around'>
              <div className="img col-6">
                <img src="	https://radiustheme.com/demo/html/cirkle/media/team/team_2.jpg" alt="member" />
              </div>
              <div className='img col-lg-6'>
                <img src="	https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg" alt="member" />
              </div>
            </div>

            <div className="col-4 col-lg-6">
              <div className="img">
                <img src="https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg" alt="member" />
              </div>
            </div>

          </div>
          <div className="col-lg-2 item-big">
            <img src="https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg" alt="member" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
