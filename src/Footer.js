import React, {Component} from 'react';

class Footer extends Component {

render(){
	

  return (
    <div className="footer header">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-col">
                        <h4 className="mustard">UPCOMING HOLIDAYS</h4>
                        <p className="black">Independence Day - 1st July, 2020</p>
	  					<p className="black">Labor Day - 7th September, 2020</p>
	  					<p className="black">Christmas - 25th December, 2020</p>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col middle">
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col last">
                        <h4 className="mustard">SOCIAL MEDIA</h4>
                        <span className="fa-stack">
                            <a target="_blank" href="https://facebook.com/muskaan">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a target="_blank" href="https://twitter.com/muskaan">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a target="_blank" href="https://instagram.com/muskaan">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a target="_blank" href="https://www.linkedin.com/company/muskaan">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
	                </div> 
                </div> 
            </div> 
        </div>
	  
	</div> 
  );
}
}

export default Footer;
