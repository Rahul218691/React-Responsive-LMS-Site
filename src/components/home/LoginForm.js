import React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = ({showform,handleClickForm}) =>{
	return(
		<div className={showform ? 'login-form popup' : 'login-form'}>
		    <form>
		        <h3>login</h3>
		        <input type="email" placeholder="username" className="box" />
		        <input type="password" placeholder="password" className="box" />
		        <p>forget password? <Link to="#">click here</Link></p>
		        <p>don't have an account? <Link to="#">register now</Link></p>
		        <input type="submit" className="btn" value="login" />
		        <i className="fas fa-times" onClick={handleClickForm}></i>
		    </form>
		</div>
		)
}

export default LoginForm;