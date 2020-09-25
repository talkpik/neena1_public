import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class UpcomingEvents extends Component {
render(){
  return (
<div>
    <div className="slider-1 header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h5 className="mustard">PARTNERS</h5>
                    
                    
                    <div className="slider-container">
                        <div className="swiper-container image-slider">
                            <div className="swiper-wrapper">
	  						
	  
	  							<AliceCarousel autoPlay={true} autoPlayInterval={2000} buttonsDisabled={true}>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/logo1.jpg" alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/logo2.jpg" alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/logo3.jpg" alt="alternative"/>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/logo4.jpg" alt="alternative"/>
                                    </div>
                                </div>
	  							<div className="swiper-slide">
                                    <div className="image-container">
                                        <img className="img-responsive" src="images/logo5.jpg" alt="alternative"/>
                                    </div>
                                </div>
	  							</AliceCarousel>
                            </div> 
                        </div> 
                    </div> 
                    

                </div> 
            </div> 
        </div> 
    </div> 
    </div>
  );
}
}

export default UpcomingEvents;
