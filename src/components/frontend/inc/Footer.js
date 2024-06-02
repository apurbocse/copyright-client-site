import React from 'react';
import { FacebookRounded, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

export default function Footer() {
  const publicUrl = process.env.PUBLIC_URL;
  return (
    <div>
      <footer className="footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="f-about single-footer">
                  <div className="logo">
                    <img className src={`${publicUrl}/assets/images/logo3.png`} alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-end col-md-6 col-sm-6">
                <div className="f-about single-footer">
                  <div className="footer-social">
                    <ul>
                      <li><a href="#"><FacebookRounded /></a></li>
                      <li><a href="#"><Twitter /></a></li>
                      <li><a href="#"><LinkedIn /></a></li>
                      <li><a href="#"><YouTube /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-12 col-md-12 text-center col-12">
                  <div className="left">
                    <p>Developed by -<a href="https://www.ipsitasoft.com/" rel="nofollow" target="_blank">IPSITA COMPUTERS PTE LTD.</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
