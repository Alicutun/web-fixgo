import React from "react";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { loginFacebook } from "../../redux/apiRequest";

export const LoginFacebook = () => {
	const dispatch = useDispatch();

	const responseFacebook = (res) => {
		const account = {
			id: res.id,
			accessToken: res.accessToken,
		};
		loginFacebook(account, dispatch, toast);
	};

	return (
		<div className='facebook'>
			<FacebookLogin
				appId='1620897148361329'
				fields='name,email,picture'
				autoLoad={true}
				callback={responseFacebook}
				render={(renderProps) => (
					<i onClick={renderProps.onClick} class='fa-brands fa-facebook-f'>
						acebook
					</i>
				)}
			/>
		</div>
	);
};
