import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import CardFlip from './CardFlip';
import UpcomingEvents from './UpcomingEvents';
import Seeker from './Seeker';
import Video from './Video';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {

  
	render(){
	
	return (
		
	  <div className="App">
  	  <Navbar/>
	  <Header/>
		<CardFlip/>
		<UpcomingEvents/>
	  <Seeker/>
	  <Video/>
	  <Team/>
	  <Contact/>
	  <Footer/>
  </div>
		  );
}
}
export default App;



  