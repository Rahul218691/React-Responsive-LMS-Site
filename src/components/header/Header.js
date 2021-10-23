import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = ({handleClickForm,homeRef,aboutRef,
courseRef,contactRef,teacherRef}) =>{

	const [toggle,setToggle] = useState(false);

	const handleMenuToggle = () =>{
		setToggle(!toggle);
	}

	return(
		<header>
		    <div id="menu" className={toggle ? 'fas fa-times' : 'fas fa-bars'} onClick={handleMenuToggle}></div>
		    <Link to="#" className="logo"><i className="fas fa-user-graduate"></i>EDUTECH</Link>
		    <nav className={toggle ? 'navbar nav-toggle' : 'navbar'}>
		        <ul>
		            <li><span onClick={()=>{homeRef.current.scrollIntoView({behaviour:'smooth',block:'center'})}}>home</span></li>
		            <li><span onClick={()=>{aboutRef.current.scrollIntoView({behaviour:'smooth',block:'center'})}}>about</span></li>
		            <li><span onClick={()=>{courseRef.current.scrollIntoView({behaviour:'smooth',block:'center'})}}>course</span></li>
		            <li><span onClick={()=>{teacherRef.current.scrollIntoView({behaviour:'smooth',block:'center'})}}>teacher</span></li>
		            <li><span onClick={()=>{contactRef.current.scrollIntoView({behaviour:'smooth',block:'center'})}}>contact</span></li>
		        </ul>
		    </nav>
		    <div id="login" className="fas fa-user-circle" onClick={handleClickForm}></div>
		</header>		
		)
}

export default Header;