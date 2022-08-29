import React from "react";
import "../../sass/components/subcomponents/register.scss";

// const Register = ({ ModalLogin, ModalRegister }) => {
const Register = ({ ModalLogin }) => {
  // vì onclick chỉ xử lí 1 event --> tạo hàm ngoài chạy 2 event cùng lúc
  // function someFunc() {
  //   ModalLogin(true);

  // }
  return (
    <div className="modal_register">
      <div className="row_top">
        <div className="title">Welcome to FixGo</div>
        <div className="title_register">Sign Up</div>
        <div className="txt"></div>

        <input
          type="email"
          placeholder="Email address.."
          className="input_data"
          required
        />
        <input
          type="password"
          placeholder="Password.."
          className="input_data"
          required
        />
        <input
          type="text"
          placeholder="Username.."
          className="input_data"
          required
        />
        <button className="btnLogin">Register</button>
      </div>
      <div className="row_bot">
        <div className="txt_signup">
          Have already an account?&nbsp;
          {/* <div className="link" onClick={someFunc}> */}
          <div className="link" onClick={() => ModalLogin(true)}>
            Sign In
          </div>
        </div>
        <div className="txt">--- or sign in with ---</div>
        <div className="login_icon">
          <i class="fa-brands fa-facebook-f">acebook</i>&emsp;
          <i class="fa-brands fa-google">oogle</i>
        </div>
      </div>
    </div>
  );
};

export default Register;