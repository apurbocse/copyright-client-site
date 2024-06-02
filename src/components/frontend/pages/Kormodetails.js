import React from 'react'
import { Link } from 'react-router-dom'

export default function Kormodetails() {
  return (
    <div>
        <div className="breadcrumbs" data-stellar-background-ratio="0.5">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content left">
                    <h1 className="page-title">সাহিত্য কর্ম </h1> 
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content right">
                    <ul className="breadcrumb-nav">
                    <li><Link to="/">হোম পেইজ</Link></li>
                    <li>সাহিত্য কর্ম </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>

        <section className="section py-5 pb-0 blog-single">
            <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-12 ">
                <div className="post-thumbnils">
                    <img src="assets/images/kormo/img1.jpg" alt="#" className="w-100 rounded" />
                </div>
                </div>
                <aside className="col-lg-7 col-md-6 col-12">
                <div className="sidebar">
                    <div className="widget popular-tag-widget">
                    <h5 className="widget-title">সাহিত্য কর্ম </h5>
                    <div className="tags">
                        <a href="#">গল্প</a>
                        <a href="#">কবিতা</a>
                        <a href="#">উপন্যাস</a>
                        <a href="#">প্রবন্ধ</a>
                        <a href="#">ভ্রমনকাহিনী</a>
                        <a href="#">গবেষণা</a>
                        <a href="#">নাটকের পাণ্ডুলিপি</a>
                        <a href="#">চলচ্চিত্রের পাণ্ডুলিপি</a>
                        <a href="#">রিপোর্ট</a>
                        <a href="#">বিজ্ঞান ও প্রযুক্তি</a>
                        <a href="#">পাঠ্যপুস্তক সহায়িকা</a>
                        <a href="#">গ্রামার/ডিকশনারি</a>
                        <a href="#">স্লোগান</a>
                        <a href="#">অনুবাদকর্ম</a>
                        <a href="#">সংগীত বিষয়ক</a>
                        <a href="#">ভিডিও রাইট</a>
                        <a href="#">শিক্ষা সহায়িকা</a>
                        <a href="#">অন্যান্য</a>
                    </div>
                    <p className="mt-4">"সাহিত্য কর্ম" একটি গুরুত্বপূর্ণ কার্যক্রম, যা সাহিত্যিক সৃষ্টিকর্মীদের সাথে সংগঠিত যায়। এটি সাহিত্যের প্রসারে এবং সাহিত্যিক প্রকাশনায় অবদান রাখে। "সাহিত্য কর্ম" সাধারণত লেখক, কবি, উপন্যাসিক, পাত্রিকিক সম্পাদক, প্রকাশক ইত্যাদির সমন্বয়ে সাধারণ হয়ে থাকে। এটি নতুন লেখকদের সাহিত্যিক দক্ষতা উন্নয়নে ও তাদের কাজের উত্তরাধিকার বৃদ্ধি করে। সাহিত্য প্রতিষ্ঠান, লেখক সম্পাদক সংঘ, প্রকাশনা সংস্থা ইত্যাদি "সাহিত্য কর্ম" অনুষ্ঠানে অংশগ্রহণ করে সাহিত্যিক প্রগতির পথে অবদান রাখে।</p>
                    <div className="button2 mt-4 mb-1">
                        <Link to="" className="btn mouse-dir white-bg">রেজিস্ট্রেশনের নিয়মাবলী <span className="dir-part" /></Link>
                    </div>
                    </div>
                </div></aside>
            </div>
            </div>
        </section>
    </div>
  )
}
