import React, {Component} from 'react';
import Modal from './Modal';

class Video extends Component {

render(){
	

  return (
	 
	  
    <div id="video" className="basic-3 header">
	    <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">CHECK OUT THE VIDEO</h2>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="image-container">
                        <div className="video-wrapper">
                            <a className="popup-youtube" href="https://youtu.be/evM_D3zEJWw" data-effect="fadeIn">
                                <img className="img-fluid" src="images/diya.jpg" alt="alternative"/>
                                <span className="video-play-button">
                                    <span></span>
                                </span>
                            </a>
                        </div> 
                    </div> 

                    
                </div> 
            </div> 
        </div> 
    </div>
	  
  );
}
}

export default Video;
