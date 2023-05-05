import React from 'react'
import './WhyChoose.scss'
import '../../Style/grid.scss'

const WhyChoose = () => {
    return (
        <section className='whyChoose'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6 left-part">
                        <div className=''>
                            <h2>Cirkle Makes Your Life Easier & Simple</h2>
                            <p>Aliquam lorem ante dapibus in viverra quis feugiat atellu Peaselus vierra nullaut metus varius laoreet unknown printer took scrambled make.</p>
                            <a href="#" className="read">
                                <span className='text'>Read More </span>
                                <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="10px">
                                    <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M16.671,9.998 L12.997,9.998 L16.462,6.000 L5.000,6.000 L5.000,4.000 L16.462,4.000 L12.997,0.002 L16.671,0.002 L21.003,5.000 L16.671,9.998 ZM17.000,5.379 L17.328,5.000 L17.000,4.621 L17.000,5.379 ZM-0.000,4.000 L3.000,4.000 L3.000,6.000 L-0.000,6.000 L-0.000,4.000 Z"></path>
                                </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 right-part">
                        <img src="https://radiustheme.com/demo/html/cirkle/media/figure/why_choose_1.jpg" alt="whychoose" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
