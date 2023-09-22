import React from "react";
import { GrInstagram, GrGithub } from "react-icons/gr";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Me</h4>
              <div>
                <address className="text-white fs-7 mb-0">
                  House No: 104 Lomo Adawu Street <br />
                  Accra - Ghana
                </address>
                <a
                  className="text-white mt-0 d-block mb-0"
                  href="tel:+233 54 333 9109"
                >
                  0543339109
                </a>
                <a
                  className="text-white d-block mt-0"
                  href="mailto:anwarsadat.d2@gmail.com"
                >
                  anwarsadat.d2@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a className="text-white" href="/#">
                    <GrInstagram />
                  </a>
                  <a className="text-white" href="/#">
                    <GrGithub />
                  </a>
                  <a className="text-white" href="/#">
                    <BsTelegram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white text-center mb-0">
                &copy; {new Date().getFullYear()}; Powered by CuriousFellow
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
