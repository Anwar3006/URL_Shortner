import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Blog Frontend Brought to You by React
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">URL Shortner</p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-main py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <nav className="navbar">
                <h2>
                  <Link to={"/"}>Shortit</Link>
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
