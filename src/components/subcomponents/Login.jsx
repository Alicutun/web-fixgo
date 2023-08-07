import React, { useState } from "react";
import "../../sass/components/subcomponents/login.scss";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { ForgetPassword } from "./ForgetPassword";

export const Login = ({ ModalLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const test = { email, password };
	const dispatch = useDispatch();
	const [validationMsg, setValidationMsg] = useState({});

	const validateEmail = () => {
		var reg = /^\w+@[a-zA-Z]{3,}\.com$/i;
		const msg = {};
		if (!email) {
			msg.email = "Please input your Email";
		} else if (!reg.test(email)) {
			msg.email = "Your-email is incorrect";
		}
		setValidationMsg(msg);
		if (Object.keys(msg).length > 0) return false;
		return true;
	};
	const validateAll = () => {
		var reg = /^\w+@[a-zA-Z]{3,}\.com$/i;
		const msg = {};
		if (!email) {
			msg.email = "Please input your Email";
		} else if (!reg.test(email)) {
			msg.email = "Your-email is incorrect";
		}

		if (!password) {
			msg.password = "Please input your Password";
		}

		setValidationMsg(msg);
		if (Object.keys(msg).length > 0) return false;
		return true;
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const newUser = {
			email: email,
			password: password,
		};
		const isValid = validateAll();
		if (!isValid) return;
		loginUser(newUser, dispatch, toast);
	};
	const [t, setT] = useState(true);
	const [type, setType] = useState("password");
	const handleShowHide = () => {
		setT(!t);
		if (t) setType("text");
		else setType("password");
	};
	const [forgot, setForgot] = useState(false);

	const postForget = async () => {
		const isValid = validateEmail();
		if (!isValid) return;
		const sendEmail = {
			email: email,
		};
		try {
			const res = await axios.post(
				`${BASE_URL}/api/password/forgotpassword`,
				sendEmail
			);
			toast.success(res.data?.message, { autoClose: 2000 });
			setForgot(true);
		} catch (err) {
			toast.error(err.response.data?.message, { autoClose: 2000 });
		}
	};
	return (
		<div className='modal_login'>
			<div className='row_top'>
				<div className='title'>Welcome to FixGo</div>
				{forgot ? (
					<ForgetPassword email={email} setForgot={setForgot} />
				) : (
					<>
						<div className='title_login'>Sign In</div>
						<form onSubmit={handleLogin}>
							<input
								type='email'
								placeholder='Your-email@gmail.com'
								className='input_data'
								onChange={(e) => setEmail(e.target.value)}
							/>
							{validationMsg.email && (
								<i className='validate'>{validationMsg.email}</i>
							)}
							<div className='parent_input'>
								<input
									type={type}
									placeholder='Password..'
									className='input_data'
									onChange={(e) => setPassword(e.target.value)}
								/>
								{validationMsg.password && (
									<i className='validate'>{validationMsg.password}</i>
								)}
								{password && (
									<div className='eye' onClick={handleShowHide}>
										{t ? (
											<i class='fa-regular fa-eye'></i>
										) : (
											<i class='fa-regular fa-eye-slash'></i>
										)}
									</div>
								)}
							</div>
							<div className='flex'>
								<div className='label_checkbox'>
									<input type='checkbox' />
									&nbsp;Remember me
								</div>
								<Link to='/' className='forgot' onClick={postForget}>
									Forgot password?
								</Link>
							</div>
							<button className='btnLogin'>Login</button>
						</form>
					</>
				)}
			</div>

			<div className='row_bot'>
				<div className='txt_signup'>
					Don't have an account?&nbsp;
					<div className='link' onClick={() => ModalLogin(false)}>
						Sign Up
					</div>
				</div>
			</div>
		</div>
	);
};
