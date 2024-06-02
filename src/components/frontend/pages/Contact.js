import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>     
        {/* Start Breadcrumbs */}
        <div className="breadcrumbs" data-stellar-background-ratio="0.5">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content left">
                    <h1 className="page-title">আমাদের সাথে যোগাযোগ করুন</h1> 
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content right">
                    <ul className="breadcrumb-nav">
                    <li><Link to="/">হোম পেইজ</Link></li>
                    <li>যোগাযোগ</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End Breadcrumbs */}

        {/* Start Contact Area */}
        <div className="contact-area contact-page pt-5 pb-5 section">
            <div className="container ">
                <div className="contact-inner">
                    <div className="row">
                        <div className="col-lg-12 col-md-10 m-auto card " style={{border: 'none'}}>
                            <div className="row">
                                <div className="col-lg-5 col-md-12">
                                    <div className="contact-info">
                                    <div className>
                                        <div className="contact-item mb-4">
                                        <div className="contact-text">
                                            <h5>রবিবার - বৃহস্পতিবার - </h5>
                                            <p>সকালঃ ৯.৩০ → বিকালঃ ৫.০০ পর্যন্ত ( সরকারী ছুটি ব্যতীত )</p>
                                        </div>
                                        </div>
                                        <div className="contact-item mb-4">
                                        <div className="contact-text">
                                            <h5>অতিরিক্ত তথ্যের জন্য যোগাযোগ -</h5>
                                            <p> +8801511-440044 </p>
                                        </div>
                                        </div>
                                        <div className="contact-item mb-4">
                                        <div className="contact-text">
                                            <h5>ঠিকানা -</h5>
                                            <p>কপিরাইট অফিস, সংস্কৃতি বিষয়ক মন্ত্রণালয়, জাতীয় গ্রন্থাগার ভবন (৩য় তলা), ৩২, বিচারপতি এসএম মোর্শেদ সরণী, আগারগাঁও, শেরেবাংলা নগর, ঢাকা-1207</p>
                                        </div>
                                        </div>
                                        <div className="contact-item mb-4">
                                        <div className="contact-text">
                                            <h5>ওয়েবসাইট - </h5>
                                            <p><a href="http://www.copyrightoffice.gov.bd" className="acolor" target="_blank">www.copyrightoffice.gov.bd</a></p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-8 col-12">
                                    <div className="contact-wrapper" data-wow-delay="0.6s">
                                    <form className="contacts-form" method="post" action>
                                        <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="contacts-icon contactss-name">
                                            <input type="text" name="name" placeholder="আপনার নাম" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="contacts-icon contactss-name">
                                            <input type="text" name="phone" placeholder="মোবাইল নম্বর" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="contacts-icon contactss-email">
                                            <input type="email" name="email" placeholder="আপনার ইমেইল" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="contacts-icon contactss-name">
                                            <input type="text" name="subject" placeholder="আপনার বিষয়" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="contacts-icon contactss-message">
                                            <textarea name="message" rows={7} placeholder="আপনার বার্তা" required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="contacts-button button2">
                                            <button type="submit" className="btn button2 mouse-dir white-bg">  বার্তা পাঠান <span className="dir-part" /></button>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-10 mt-5 m-auto">       
                            <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.online-timer.net">timer</a><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:500px;width:100%;}" }} /><a href="https://www.embedgooglemap.net">custom embedded google map</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}" }} /></div></div>      
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        {/* End Contact Area */}

        {/* Start Google-map Area */}

        {/* End Google-map Area */}
    </div>
  )
}
