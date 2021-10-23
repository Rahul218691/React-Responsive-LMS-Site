import React from 'react';
import {Link} from 'react-router-dom';


const AboutSection = () =>{
	return(
		<div className="footer">
		    <div className="box-container">
		        <div className="box">
		            <h3>branch locations</h3>
		            <Link to="#">India</Link>
		            <Link to="#">USA</Link>
		            <Link to="#">france</Link>
		            <Link to="#">russia</Link>
		        </div>
		        <div className="box">
		            <h3>quick links</h3>
		            <Link to="#">home</Link>
		            <Link to="#">about</Link>
		            <Link to="#">course</Link>
		            <Link to="#">teachers</Link>
		            <Link to="#">contact</Link>
		        </div>
		        <div className="box">
		            <h3>contact info</h3>
		            <p> <i className="fas fa-map-marker-alt"></i> bangalore, india 560015. </p>
		            <p> <i className="fas fa-envelope"></i> rm218691@gmail.com </p>
		            <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
		        </div>
		    </div>
		    <h1 className="credit">created by <Link to="#">Rahul Guptha</Link> all rights reserved. </h1>
		</div>	
		)
}

export default AboutSection;