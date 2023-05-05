import React from 'react'
import './Banner.scss'
import '../../Style/grid.scss'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 left-part">
                        <h2>Fully Responsive Cirkle WordPress Theme</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <a href="#" className="read">
                                <span className='text'>Purchase Now </span>
                                <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="10px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M16.671,9.998 L12.997,9.998 L16.462,6.000 L5.000,6.000 L5.000,4.000 L16.462,4.000 L12.997,0.002 L16.671,0.002 L21.003,5.000 L16.671,9.998 ZM17.000,5.379 L17.328,5.000 L17.000,4.621 L17.000,5.379 ZM-0.000,4.000 L3.000,4.000 L3.000,6.000 L-0.000,6.000 L-0.000,4.000 Z"></path>
                                </svg>
                                </span>
                            </a>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-lg-block right-part">
                       <div className="img"> <img src="https://radiustheme.com/demo/html/cirkle/media/banner/apps.png" alt="banner"/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
