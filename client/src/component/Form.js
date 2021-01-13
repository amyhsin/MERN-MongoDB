import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
	const [userDetails, setUserDetails] = useState({
		userName: '',
		userEmail: '',
		userPhone: '',
		userSug: '',
		message: ''
	});

	const formValues = (event) =>{
		setUserDetails({
			...userDetails,
			[event.target.name]: event.target.value
		})
	}

	// Send data from front-end to the backend
	const formSubmit = async (event) => {
		// event.preventDefault();
		alert("Feedback received");

		const body = JSON.stringify({
			userName: userDetails.userName,
			userEmail: userDetails.userEmail,
			userPhone: userDetails.userPhone,
			userSug: userDetails.userSug
		});

		const response = await axios.post("/api/contact", body, {
			headers:{
				'Content-Type': 'application/json'
			}
		})
		
		setUserDetails({
			...userDetails,
			message: response.data.message
		})

	};

	
	return (
		<div className="container">
			<h3 className="title">顧客回饋表</h3>
			<form onSubmit = {formSubmit}>
				<label>Name (required) </label> <br />
				<input required type="text" id="userName" name="userName" placeholder="您的名字" autocomplete="off" onChange={formValues}/>
				<br />
				<label>Email (required) </label> <br />
				<input required type="email" id="userEmail" name="userEmail" placeholder="您的電子信箱" autocomplete="off" onChange={formValues}/>
				<br />
				<label>Phone Number </label> <br />
				<input type="text" id="userPhone" name="userPhone" placeholder="您的手機號碼" autocomplete="off" onChange={formValues}/>
				<br />
				<label>Suggestion (required) </label> <br />
				<input required type="text" className="bigframe" id="userSug" name="userSug" placeholder="您的建議" autocomplete="off" onChange={formValues}/>
				<br /><br />
				<button type="submit">提交</button>
			</form>

		</div>
	)
}

export default Form;
