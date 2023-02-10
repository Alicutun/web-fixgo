import React from "react";
import { useDispatch } from "react-redux";
// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { loginFacebook } from "../../redux/apiRequest";

const LoginFacebook = () => {
  const dispatch = useDispatch();
  const responseFacebook = (res) => {
    console.log("login fb ok: ", res);
    const account = {
      id: res.id,
      accessToken: res.accessToken,
    };
    console.log("acc: ", account);
    loginFacebook(account, dispatch, toast);
  };
  return (
    <div className="facebook">
      <FacebookLogin
        appId="743911623614504"
        fields="name,email,picture"
        autoLoad
        callback={responseFacebook}
        render={(renderProps) => (
          <i onClick={renderProps.onClick} class="fa-brands fa-facebook-f">
            acebook
          </i>
        )}
      />
    </div>
  );
};

export default LoginFacebook;