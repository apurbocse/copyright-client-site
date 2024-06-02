import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  const publicUrl = process.env.PUBLIC_URL;
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavLinkClick = () => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };

  const handleTogglerClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/">
                    <img src={`${publicUrl}/assets/images/logo3.png`} alt="Logo"/>
                  </Link> 
                  <button 
                    className={`navbar-toggler ${isNavbarOpen ? 'active' : ''}`} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded={isNavbarOpen} 
                    aria-label="Toggle navigation"
                    onClick={handleTogglerClick}
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div className={`collapse navbar-collapse sub-menu-bar ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link className="page-scroll" to="/" onClick={handleNavLinkClick}>হোম পেইজ</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="copyright" onClick={handleNavLinkClick}>কপিরাইট অফিস</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="rules" onClick={handleNavLinkClick}>রেজিস্ট্রেশনের নিয়মাবলি</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="documents" onClick={handleNavLinkClick}>পূরণকৃত ফরম ও নমুনা</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="documents" onClick={handleNavLinkClick}>সংযুক্তির নমুনা</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="faq" onClick={handleNavLinkClick}>জিজ্ঞাসা</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="contact" onClick={handleNavLinkClick}>যোগাযোগ</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" to="dashboard/user-profile" onClick={handleNavLinkClick}>প্রো</Link>
                      </li>
                      <li className="nav-item loginButtonSm rounded">
                        <Link to="user-login" className="rounded" onClick={handleNavLinkClick}>প্রবেশ করুন <span className="dir-part" /></Link>
                      </li>
                    </ul>
                  </div>
                  <div className="button loginButtonBG">
                    <Link to="user-login" className="btn white-bg mouse-dir">প্রবেশ করুন <span className="dir-part" /></Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
