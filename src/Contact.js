import React, {Component} from 'react';
import Dialog from './Dialog';

class Contact extends Component {
state={isOpen:false}
render(){
  return (
    <div id="contact" className="form-2 header">
        <div className="container">
            
	  		<div className="row">
                <div className="col-lg-6">
	  				<h2 className="mustard">CONTACT INFORMATION</h2>
                    <ul className="list-unstyled li-space-lg">
                        <li className="address black">Don't hesitate to email or call us</li>
                        <li className="black"><i className="fas fa-map-marker-alt"></i>Vancouver, BC, Canada</li>
                        <p><li><i className="fas fa-envelope"></i><a className="mustard" href="mailto:INFO@MUSKAANTHENGO.ORG">INFO@MUSKAANTHENGO.ORG</a></li></p>
	  					<p><li><i class="fas fa-phone"></i><a className="mustard" href="tel:00911141761873">+91 11 4176 1873</a></li></p>
                    </ul>
	  			</div>
	  			<div className="col-lg-6">
                    <div className="map-responsive">
                        <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.30827522842!2d-123.2639867747921!3d49.2576507715125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1597819772008!5m2!1sen!2sca" allowFullScreen></iframe>
	                </div>
                </div> 
            </div> 

        </div> 
    </div> 
  );
}
}

export default Contact;


