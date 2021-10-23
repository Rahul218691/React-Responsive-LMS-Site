import React from 'react';
import {Link} from 'react-router-dom';
import CourseImg from '../../images/course.jpeg';

const CourseSection = ({courseRef}) =>{
	return(
		<section className="course" id="course" ref={courseRef}>

		<h1 className="heading">our popular courses</h1>    

		<div className="box-container">

		    <div className="box">
		        <img src={CourseImg} alt="" />
		        <h3 className="price">$50</h3>
		        <div className="content">
		            <div className="stars">
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star-half"></i>
		            </div>
		            <Link to="#" className="title">learn front end development</Link>
		            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
		            <div className="info">
		                <h3> <i className="far fa-clock"></i> 2 hours </h3>
		                <h3> <i className="far fa-calendar-alt"></i> 6 months </h3>
		                <h3> <i className="fas fa-book"></i> 12 modules </h3>
		            </div>
		        </div>
		    </div>

		    <div className="box">
		        <img src={CourseImg} alt="" />
		        <h3 className="price">$50</h3>
		        <div className="content">
		            <div className="stars">
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star-half"></i>
		            </div>
		            <Link to="#" className="title">learn front end development</Link>
		            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
		            <div className="info">
		                <h3> <i className="far fa-clock"></i> 2 hours </h3>
		                <h3> <i className="far fa-calendar-alt"></i> 6 months </h3>
		                <h3> <i className="fas fa-book"></i> 12 modules </h3>
		            </div>
		        </div>
		    </div>

		    <div className="box">
		        <img src={CourseImg} alt="" />
		        <h3 className="price">$50</h3>
		        <div className="content">
		            <div className="stars">
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star-half"></i>
		            </div>
		            <Link to="#" className="title">learn front end development</Link>
		            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
		            <div className="info">
		                <h3> <i className="far fa-clock"></i> 2 hours </h3>
		                <h3> <i className="far fa-calendar-alt"></i> 6 months </h3>
		                <h3> <i className="fas fa-book"></i> 12 modules </h3>
		            </div>
		        </div>
		    </div>

		    <div className="box">
		        <img src={CourseImg} alt="" />
		        <h3 className="price">$50</h3>
		        <div className="content">
		            <div className="stars">
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star-half"></i>
		            </div>
		            <Link to="#" className="title">learn front end development</Link>
		            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
		            <div className="info">
		                <h3> <i className="far fa-clock"></i> 2 hours </h3>
		                <h3> <i className="far fa-calendar-alt"></i> 6 months </h3>
		                <h3> <i className="fas fa-book"></i> 12 modules </h3>
		            </div>
		        </div>
		    </div>

		    <div className="box">
		        <img src={CourseImg} alt="" />
		        <h3 className="price">$50</h3>
		        <div className="content">
		            <div className="stars">
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star-half"></i>
		            </div>
		            <Link to="#" className="title">learn front end development</Link>
		            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
		            <div className="info">
		                <h3> <i className="far fa-clock"></i> 2 hours </h3>
		                <h3> <i className="far fa-calendar-alt"></i> 6 months </h3>
		                <h3> <i className="fas fa-book"></i> 12 modules </h3>
		            </div>
		        </div>
		    </div>

		    <div className="box">
		        <img src={CourseImg} alt="" />
		        <h3 className="price">$50</h3>
		        <div className="content">
		            <div className="stars">
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star"></i>
		                <i className="fas fa-star-half"></i>
		            </div>
		            <Link to="#" className="title">learn front end development</Link>
		            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae. Modi quos excepturi id quibusdam? Molestiae quis nihil non debitis!</p>
		            <div className="info">
		                <h3> <i className="far fa-clock"></i> 2 hours </h3>
		                <h3> <i className="far fa-calendar-alt"></i> 6 months </h3>
		                <h3> <i className="fas fa-book"></i> 12 modules </h3>
		            </div>
		        </div>
		    </div>

		</div>

		</section>				
		)
}

export default CourseSection;