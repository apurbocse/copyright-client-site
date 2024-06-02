import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
  <div>
    <div className="breadcrumbs" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="breadcrumbs-content left">
              <h1 className="page-title">কপিরাইট অফিসের সংক্ষিপ্ত পরিচিতি</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="breadcrumbs-content right">
              <ul className="breadcrumb-nav">
                <li><Link to="/">হোম পেইজ</Link></li>
                <li>কপিরাইট অফিস</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="section pt-5 mb-5 pb-0 service-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="service-details">
              <div className="service-single-img">
                <img src="assets/images/Capture.png" alt="#" />
              </div>
              <div className="content-body">
                <p>কপিরাইট অফিস একটি দেওয়ানী আদালতের সমমর্যাদা সম্পূর্ণ প্রতিষ্ঠান।</p>
                <p>এর প্রধান কাজ হচ্ছে দেশে এবং আন্তর্জাতিক পর্যায়ে সৃজনশীল ব্যক্তিবর্গ কর্তৃক প্রণীত/রচিত সৃজনশীল কর্মসমূহের কপিরাইট রেজিস্ট্রেশন এবং সনদ প্রদান, রেজিস্ট্রিকৃত কর্মসমূহের নমুনা সংরক্ষণ, এতদসংক্রান্ত- সকল ধরনের পাইরেসি রোধকরণসহ কপিরাইট সংক্রান- বিরোধসমূহ নিষ্পত্তিকরণ।
                  কপিরাইট আইন ২০০০ (২০০৫ সালে সংশোধিত) এর বিধান দ্বারা কপিরাইট অফিস পরিচালিত হয়। কপিরাইট আইনে সংশ্লিষ্ট সৃজনশীল ব্যক্তিবর্গের জন্য দেওয়ানী এবং ফৌজদারী উভয় ধরণের প্রতিকারের বিধান রাখা হয়েছে। </p> <br />
                <p>কপিরাইট অফিস কর্তৃক নিম্নরূপভাবে নাগরিক সেবা প্রদান করা হয়।</p>
                <p> সৃজনশীল কর্মসমূহ-সাহিত্য, নাট্য, কম্পিউটার সফটওয়্যার, সংগীত, শিল্প, স্হাপত্য, চলচ্চিত্র, ধারণ এবং সমপ্রচার কর্মসমূহের কপিরাইট সনদ প্রদান।
                  কপিরাইট সনদ প্রাপ্তির জন্য সরকার নির্ধারিত ফি এর ট্রেজারী চালানের কপি, সৃজনশীল কর্মের ০২ (দুই) কপি নমুনাসহ নির্ধারিত ফরমে (ফরম-২) ০৩ (তিন) কপি আবেদন দাখিল করতে হয়।
                  কপিরাইট সনদ প্রদানের জন্য নূন্যতম ৩১ দিন সময় প্রয়োজন। কারণ কপিরাইট আইন-২০০০ এবং কপিরাইট রুলস ২০০৬ এর ৪ (৪) বিধি মোতাবেক কপিরাইট রেজিস্ট্রেশন সংক্রান্ত- যে কোন কর্মের বিষয়ে আবেদন প্রাপ্তির পর বর্ণিত কর্মের বিষয়ে আপত্তির সুযোগ প্রদানের জন্য ৩০ দিন অপেক্ষা করতে হয়।</p>                           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>

  )
}
