import React from 'react';
import {HomeSection,AboutSection,CourseSection,TeacherSection,
ContactSection,FooterSection,LoginForm} from '../../components';

const HomePage = ({showform,handleClickForm,homeRef,aboutRef,
courseRef,contactRef,teacherRef}) =>{
	return(
			<>
				<LoginForm showform={showform} handleClickForm={handleClickForm}/>
				<HomeSection homeRef={homeRef} aboutRef={aboutRef}/>
				<AboutSection aboutRef={aboutRef}/>
				<CourseSection courseRef={courseRef}/>
				<TeacherSection teacherRef={teacherRef}/>
				<ContactSection contactRef={contactRef}/>
				<FooterSection/>
			</>
		)
}

export default HomePage;