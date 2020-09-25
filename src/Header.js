import React, {Component} from 'react';
import Typical from 'react-typical'




class Header extends Component {
render(){
  return (
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            
	  					<h1><Typical className="mustard"
	  								loop={Infinity}
        							wrapper="b"	
	  								steps={[
	  									'WELCOME!!!',1500,
	  									' ',100
	  									
	  								]}
	  							/></h1>
	  						
	                    </div> 
                    </div> 
	  				<div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="images/2.jpg" alt="alternative"/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </header>
  );
}
}

export default Header;


