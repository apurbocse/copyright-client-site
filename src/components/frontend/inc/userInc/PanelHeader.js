import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PanelHeader() {
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
                                        <img className src={`${publicUrl}/assets/images/logo3.png`} alt="Logo" />
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
                                                <Link className="page-scroll" to="/dashboard/user-profile" onClick={handleNavLinkClick}>প্রোফাইল</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="page-scroll" to="/dashboard/applicant" onClick={handleNavLinkClick}>আবেদন সমুহ</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link type="button" data-bs-toggle="modal" data-bs-target="#applicationTracking" className="page-scroll" >আবেদন ট্রাকিং প্রক্রিয়া</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="page-scroll" to="/dashboard/user-profile/add" onClick={handleNavLinkClick}>কপিরাইটের জন্য আবেদন করুন</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="page-scroll" to="/dashboard/user-profile/agreement-form-add" onClick={handleNavLinkClick} >চুক্তিপত্রের জন্য আবেদন করুন</Link>
                                            </li>
                                            <li className="nav-item rounded userLogoutBtn">
                                                <Link to="/" className="btn white-bg mouse-dir">প্রস্থান করুন</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="button loginButtonBG">
                                        <Link to="/" className="btn white-bg mouse-dir">প্রস্থান করুন <span className="dir-part" /></Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section p-0 service-single">
                <div className="container">
                       <div className="modal fade" id="applicationTracking" aria-labelledby="applicationTrackingLabel" aria-hidden="true">
                       <div className="modal-dialog">
                         <div className="modal-content">
                           <div className="modal-header user-modal-header">
                             <h5 className="modal-title text-light" id="applicationTrackingLabel">আবেদন পত্র ট্র্যাকিং প্রক্রিয়া</h5>
                             <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div className="modal-body">
                             <div className='row'>
                                <div className='col-md-5 mb-2'>
                                  <label>আবেদন পত্র</label>
                                  <select className='form-control custom-input-field2'>
                                    <option value="" selected disabled>র্নিবাচন করুন...</option>
                                    <option value="1">কপিরাইট</option>
                                    <option value="2">চুক্তিপত্র</option>
                                  </select>
                                </div>
                                <div className='col-md-7'>
                                    <label>ট্র্যাকিং নম্বর লিখুন </label>
                                    <input type="text" className="custom-input-field" placeholder="ট্র্যাকিং নম্বর লিখুন " />
                                </div>
                             </div>
                           </div>
                           <div className="modal-footer user-modal-footer">
                             <button type="button" className="custombtn3">সমর্পণ করুন</button>
                           </div>
                         </div>
                       </div>
                     </div>
                </div>
            </section>
        </div>
    )
}