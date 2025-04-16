// React settings imports
import React from "react";
import { Link } from "react-router-dom";

// Style imports
import './Footer.css';

function Footer() {
  return (
    <>
      <div
        className="footer-holder"
        style={{ backgroundColor: "#242424", color: "white" }}
      >
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col pe-5 mt-4">
              <h1>Your safety, our concern</h1>
            </div>
            <div className="col">
              <p>THANE</p>
              <p style={{lineHeight: "2"}}>
                ninadwalke2022@kccemsr.edu.in
                <br />
                +910000000000
                <br />
                XYZ, ABC Town,
                <br />
                Negra Oroyo Lane, Albuquerque
              </p>
            </div>
            <div className="col text-center">
                <p>OUR SOCIALS</p>
                <p style={{lineHeight: "2.3"}}>
                    Ninad Walke&nbsp;&nbsp;&nbsp;     
                    <a style={{color: "white", textDecoration: "none"}} href="https://www.linkedin.com/in/ninad-walke-3a0a52262/"><i class="fa-brands fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
                    <a style={{color: "white", textDecoration: "none"}} href="https://github.com/NinadWalke"><i class="fa-brands fa-github"></i></a><br/>
                    Shweta Shimpi&nbsp;&nbsp;&nbsp;
                    <a style={{color: "white", textDecoration: "none"}} href="https://www.linkedin.com/in/shweta-shimpi-984726286/"><i class="fa-brands fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
                    <a style={{color: "white", textDecoration: "none"}} href="https://github.com/30shwetashimpi"><i class="fa-brands fa-github"></i></a><br/>
                    Sakshi Nikum&nbsp;&nbsp;&nbsp;
                    <a style={{color: "white", textDecoration: "none"}} href="https://www.linkedin.com/in/sakshi-nikum-57b2b0284/"><i class="fa-brands fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
                    <a style={{color: "white", textDecoration: "none"}} href="https://github.com/sakshinikum"><i class="fa-brands fa-github"></i></a>
                </p>
            </div>
            <div className="col ms-5">
              <p>RANDOM FOOTER TITLE</p>
              <p style={{lineHeight: "2.3"}}>
                Random Footer 1<br/>
                Random Footer 2<br/>
                Random Footer 3
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
