import React from 'react';
import {Link} from 'react-router-dom';

const AboutSection = ({teacherRef}) =>{
	return(
		<section className="teacher" id="teacher" ref={teacherRef}>
		<h1 className="heading">our expert teachers</h1>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At non explicabo tempora modi, reprehenderit ratione sunt ea porro tenetur officiis alias sapiente praesentium voluptas cumque quo maiores dolores totam ex.</p>
		<Link to="#"><button className="btn">learn more</button></Link>
		</section>	
		)
}

export default AboutSection;