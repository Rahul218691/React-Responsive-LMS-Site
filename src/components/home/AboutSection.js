import React from 'react';
import {Link} from 'react-router-dom';
import AboutImg from '../../images/about-img.svg';

const AboutSection = ({aboutRef}) =>{
	return(
		<section className="about" id="about" ref={aboutRef}>
		    <div className="image">
		        <img src={AboutImg} alt="" />
		    </div>
		    <div className="content">
		        <h3>why choose us?</h3>
		        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam quaerat dolor voluptas nobis voluptates illum? Inventore voluptas dolore voluptates.</p>
		        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus ducimus dignissimos pariatur. Amet sed distinctio earum dolorum nulla, in obcaecati aliquid modi quos magni ducimus culpa nobis laudantium incidunt.</p>
		        <Link to="#"><button className="btn">learn more</button></Link>
		    </div>
		</section>	
		)
}

export default AboutSection;