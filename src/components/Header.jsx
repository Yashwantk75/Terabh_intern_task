import { FiSidebar } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { useContext } from "react";
import { user_data } from "../store/User-credential";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { userDetail } = useContext(user_data);
  const fullscreenmode = () => {
    document.querySelector("#root").requestFullscreen();
  };
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid navdiv">
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <a href="" className="company-logo">
                F
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <FiSidebar />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <LuMessageCircle />
              </a>
            </li>
          </ul>

          <h1 className="todoTitle me-auto" onClick={() => navigate('../')}>TODO</h1>
          <div className="login-div">
            {Object.keys(userDetail).length === 0 ? <button type="button" className="btn btn-primary login-button" onClick={() => navigate('./login')}>
              Log in or create account
            </button> : <button className="btn btn-primary login-button">{userDetail.email[0].toUpperCase()}</button>}
            {/* <div className="option-button">option</div> */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                option
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={fullscreenmode}
                  >
                    Fit to screen
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="expand-button" onClick={fullscreenmode}>
              <AiOutlineExpandAlt />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
