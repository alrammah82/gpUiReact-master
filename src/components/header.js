import React from "react"


function header() {
    return ( 

    <header  className="header-area header-sticky">

        <div  className="container">
            <div  className="row">
                <div  className="col-12">
                    <nav  className="main-nav">
                        <a href="index.html"  className="logo">
                            Details
                        </a>
                        <ul  className="nav">
                            <li  className="scroll-to-section"><a href="#welcome"  className="menu-item">Home</a></li>
                            <li  className="scroll-to-section"><a href="#services"  className="menu-item">Services </a></li>
                            <li  className="scroll-to-section"><a href="#promotion"  className="menu-item">Progress</a>
                            </li>
                            <li> <a href="#tryit"  className="menu-item">Try it Now  </a></li>
                            <li  className="scroll-to-section"><a href="#testimonials"  className="menu-item">OUR Team</a></li>
                        </ul>
                        <a  className='menu-trigger'>
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