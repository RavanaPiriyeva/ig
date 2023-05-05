import React from 'react'
import './Testimonial.scss'
import '../../Style/grid.scss'

const Testimonial = () => {
    return (
        <section className='testimonial'>
            <div className="container-lg container-fluid">
                <div className='text'>
                    <h3>Zinia Jessy</h3>
                    <div>CEO, Khadai R Ghumai</div>
                    <p>" Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor utlabore et dolore magna aliqua enim miniectetur adipisicing eliteiusmod dolore magna aliqua Ut enim ad minim veniam."</p>
                </div>
                <div className="fotos">
                    <div className="img"><img src="	https://radiustheme.com/demo/html/cirkle/media/testimonial/nav_3.jpg" alt="testimonial" /></div>
                    <div className="img main" ><img src="	https://radiustheme.com/demo/html/cirkle/media/testimonial/nav_1.jpg" alt="testimonial" /></div>
                    <div className="img"><img src="	https://radiustheme.com/demo/html/cirkle/media/testimonial/nav_2.jpg" alt="testimonial" /></div>
                </div>
           <ul>
               <li><img src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_10.png" alt="img"/></li>
               <li><img src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_11.png" alt="img"/></li>
               <li><img src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_8.png" alt="img"/></li>
               <li><img src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_9.png" alt="img"/></li>
               <li><img src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_2.png" alt="img"/></li>
               <li><img src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_4.png" alt="img"/></li>
               <li><img src="https://radiustheme.com/demo/html/cirkle/media/figure/shape_8.png" alt="img"/></li>
           </ul>
            </div>
        </section>
    )
}

export default Testimonial
