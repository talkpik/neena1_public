import React, {Component} from 'react';
import Dialog from './Dialog';

class Seeker extends Component {
state={isOpen:false}
render(){
  return (
	  	<div id="seeker" className="basic-2 header">
        	<div className="container">
            	<div className="row">
                	<div className="col-lg-6">
                    	<div className="text-container">
                        	<h2 className="mustard">OUR PRODUCTS</h2>
                        	
                            		<p className="black">People with Intellectual Disabilities are good in concrete intelligence which means working with real situations that can be seen, heard, touched etc.</p>
	  								<br></br>
	  								<p className="black">His helped us in  choosing  various vocational training programs for them  Appropriate training has enabled them to make range of beautiful products that are sold by Muskaan team.</p>
                            	
						</div> 
                	</div> 
                	<div className="col-lg-6">
                    	<div className="image-container" style={{paddingTop:"5rem"}}>
                        	<img className="img-fluid" src="images/6.png" alt="alternative"/>
                    	</div> 
                	</div> 
            	</div> 
        	</div> 
    	</div> 

	  
  );
}
}

export default Seeker;
