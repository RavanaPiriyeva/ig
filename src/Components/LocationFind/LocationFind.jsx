import React from 'react'
import './LocationFind.scss'
import '../../Style/grid.scss'

const LocationFind = () => {
    return (
        <section className='locationFind'>
            <div className='container'>
                <div className="title">
                    <h2>Find People Near You</h2>
                    <p>when an unknown printer took a galley of type and meeting fari scrambled it to <br></br> make a type specimen book.</p>
                </div>
                <div className="fotos row">
                    <div className="col-6 left-part">
                        <div className="item">
                            <a href="#">
                                <div className="item-body">
                                    <div className="img">
                                        <img src="https://radiustheme.com/demo/html/cirkle/media/location/location_1.jpg" alt="locationFind" />
                                    </div>
                                    <h3>Newyork City</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-6 right-part'>
                       
                        <div className="col-6">
                            <div className="item">
                                <a href="#">
                                    <div className="item-body">
                                        <div className="img">
                                            <img src="https://radiustheme.com/demo/html/cirkle/media/location/location_2.jpg" alt="locationFind" />
                                        </div>
                                        <h3>Bostton</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="item">
                                <a href="#">
                                    <div className="item-body">
                                        <div className="img">
                                            <img src="https://radiustheme.com/demo/html/cirkle/media/location/location_2.jpg" alt="locationFind" />
                                        </div>
                                        <h3>Kancas City</h3>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="item">
                                <a href="#">
                                    <div className="item-body">
                                        <div className="img">
                                            <img src="https://radiustheme.com/demo/html/cirkle/media/location/location_3.jpg" alt="locationFind" />
                                        </div>
                                        <h3>California</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="item">
                                <a href="#">
                                    <div className="item-body">
                                        <div className="img">
                                            <img src="https://radiustheme.com/demo/html/cirkle/media/location/location_4.jpg" alt="locationFind" />
                                        </div>
                                        <h3>Los Angeles</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationFind
