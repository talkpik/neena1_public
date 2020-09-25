import React, {Component} from 'react';

class Team extends Component {
render(){
  return (
    <div id="team" className="basic-4 header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">THE FOUNDING TEAM</h2>
	  				<p className="p-heading p-large black">We look forward to your presence!</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    
	  				<div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/neena.jpg" alt="alternative"/>
                        </div> 
                        <p className="p-large black"><strong>Neena Suri</strong></p>
                        <p className="job-title"></p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="https://www.linkedin.com/in/neena-suri-507546162/">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </a>
                            </span>
                        </span> 
                    </div> 
                    
                    
                    
                    
	  				
                </div> 
            </div> 
        </div> 
    </div> 
    
  );
}
}

export default Team;
