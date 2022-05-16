import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo" > 

                Details
               </Link>
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="/#welcome" className="menu-item">
                     
                    Home 
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#services" className="menu-item">
                     
                    Services 
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#promotion" className="menu-item">
                     
                    Progress 
                  </Link>
                </li>
                 
                <li className="scroll-to-section">
                  <Link to="/#tryit" className="menu-item">
                     
                    Try it Now 
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/#testimonials" className="menu-item">
                     
                    OUR Team 
                  </Link>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
