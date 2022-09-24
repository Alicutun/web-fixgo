import React, { useState } from "react";
import "../sass/components/header.scss";
import { Link } from "react-router-dom";
import FormModal from "./subcomponents/FormModal.jsx";
import { useSelector } from "react-redux";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [afterlogin, setAfterLogin] = useState(false);

  // const [user, setUser] = useState(null);
  const user = useSelector((state) => state.auth.login?.currentUser);

  return (
    <header>
      <div className="header">
        <div className="main">
          <div className="logo">FixGo</div>
          <div className="navbar">
            <ul>
              <Link to="/Home">
                <li>Home</li>
              </Link>
              <Link to="/Movie">
                <li>
                  <i class="fa-solid fa-film"></i> Movie
                </li>
              </Link>
              <Link to="/Event">
                <li>
                  <i class="fa-brands fa-hotjar"></i> Event
                </li>
              </Link>
              <li>
                <i class="fa-solid fa-headset"></i> Suport
              </li>
            </ul>
          </div>
          <div className="search">
            <form action="" className="formsearch">
              <input
                className="ipsearch"
                type="text"
                placeholder="Search by movie.."
                name="search"
              />
              <div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </form>
          </div>
          {user ? (
            <button
              className="login"
              onClick={() => {
                setAfterLogin(!afterlogin);
              }}
            >
              <img
                src={
                  user.data.avatar ||
                  "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.15752-9/306560976_1478177569326420_2543756426164044655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-2G1HRY79g8AX9gnj1V&_nc_ht=scontent.fsgn13-4.fna&oh=03_AVJJPT5lOcfprQA8dsepUNA9iTQNfyq65lt2uhFwlDfRkg&oe=6353AE03"
                }
                alt=""
                className="avt_user"
              />
              &nbsp;{user.data.name}
            </button>
          ) : (
            <button
              className="login"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <i class="fa-solid fa-user"></i> Login
            </button>
          )}
        </div>
        {afterlogin ? (
          <nav className="nav_user">
            <div></div>
            <div className="nav_user-btn">
              <div className="nav_user-btn-children">My Profile</div>
              <div className="nav_user-btn-children">Booking History</div>
              <div className="nav_user-btn-children">
                <i class="fa-solid fa-right-from-bracket"></i> Log Out
              </div>
            </div>
          </nav>
        ) : (
          <></>
        )}
        {user ? <></> : openModal && <FormModal closeModal={setOpenModal} />}
      </div>
    </header>
  );
};

export default Header;
