import React from 'react';
import ContactImg from '../../images/contact-img.png';

const AboutSection = ({contactRef}) =>{
	return(
	<section className="contact" id="contact" ref={contactRef}>
	<h1 className="heading">contact us</h1>
	<div className="row">
	    <form action="">
	        <input type="text" placeholder="full name" className="box" />
	        <input type="email" placeholder="your email" className="box" />
	        <input type="password" placeholder="your password" className="box" />
	        <input type="number" placeholder="your number" className="box" />
	        <textarea name="" id="" cols="30" rows="10" className="box address" placeholder="your address"></textarea>
	        <input type="submit" className="btn" value="send now" />
	    </form>
	    <div className="image">
	        <img src={ContactImg} alt="" />
	    </div>
	</div>
	</section>
		)
}

export default AboutSection;