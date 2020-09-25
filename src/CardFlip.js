import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import ReactCardFlip from 'react-card-flip';
import Front1 from './Front1';
import Back1 from './Back1';
import Front2 from './Front2';
import Back2 from './Back2';

class CardFlip extends Component {
	constructor(props) {
    super(props);
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
render(){
  return (
	  <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                   <ReactCardFlip isFlipped={this.state.isFlipped} >
	  					<div onClick={this.handleClick}>
	  						<Front1/>
        				</div>
	  					<div className="cardImg cardText" onClick={this.handleClick}>
	  						<Back1/>
          				</div>
      				</ReactCardFlip>
                	<div style={{background:"yellow",textAlign:"center"}}><h5>WE CELEBRATE DIVERSITY</h5></div>
	  			</div> 
	  
	  			<div className="col-lg-6">
                    <ReactCardFlip isFlipped={this.state.isFlipped} >
	  					<div onClick={this.handleClick}>
          					<Front2/>
          				</div>
	  					<div className="cardImg cardText" onClick={this.handleClick}>
          					<Back2/>
	  					</div>
      				</ReactCardFlip>
	  				<div style={{background:"yellow",textAlign:"center"}}><h5>EMPOWERING THROUGH TRAINING AND EMPLOYMENT</h5></div>
                </div> 
            </div> 
        </div> 
    </div>
    
  );
}
}

export default CardFlip;


      