import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <section className="portfolio-section mt-5 mb-4 pb-0">
      <div className="container">
        <div className="row grid">
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item sahitto">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".3s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/sahitto.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>সাহিত্য কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>সাহিত্য কর্ম</h5></Link>
            </div>  
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item songit">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".4s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/songgit.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>সংগীত কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>সংগীত কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item silpo">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".5s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/silpo.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>শিল্প কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>শিল্প কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item record">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".6s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/record.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>রেকর্ড কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>রেকর্ড কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item cholochitro">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".7s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/cholochittro.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>চলচ্চিত্র কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>চলচ্চিত্র কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item nattho">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/nattho.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>নাট্য কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>নাট্য কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item software">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/software.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>সফ্‌ট-ওয়্যার কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>সফ্‌ট-ওয়্যার কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item telivision">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/tv.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>টেলিভিশন সম্প্রচার কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>টেলিভিশন সম্প্রচার কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item betar">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/radio.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>বেতার সম্প্রচার কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>বেতার সম্প্রচার কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item website">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/email.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>ওয়েবসাইট, ই-মেইল কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>ওয়েবসাইট, ই-মেইল কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item telivision">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/tv.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>টেলিভিশন সম্প্রচার কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>টেলিভিশন সম্প্রচার কর্ম</h5></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 grid-item betar">
            <div className="card lormolist shadow-sm mb-4">
              <div className="portfolio-item-wrapper wow " data-wow-delay=".8s">
                <div className="portfolio-img">
                  <img src="assets/images/kormo/radio.jpg" alt />
                </div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>বেতার সম্প্রচার কর্ম</h4>
                    <p>বাংলাদেশ কপিরাইট অফিস </p>
                    <Link className="theme-btn border-btn" to="details">বিস্তারিত দেখুন</Link>
                  </div>
                </div>
              </div>
              <Link className="m-auto buttonn my-3" to="details"> <h5 className>বেতার সম্প্রচার কর্ম</h5></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
