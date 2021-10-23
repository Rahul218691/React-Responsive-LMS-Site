import React from 'react';
// import {Link} from 'react-router-dom';

const HomeSection = ({homeRef,aboutRef}) =>{
	return(
		<section className="home" id="home" ref={homeRef}>
		    <h1>education from home</h1>
		    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum neque aliquid similique error velit placeat vitae accusantium est nam magnam?</p>
		    <button className="btn" onClick={()=>{aboutRef.current.scrollIntoView({behaviour:'smooth',block:'center'})}}>get started</button>
		    <div className="shape"></div>
		</section>		
		)
}

export default HomeSection;