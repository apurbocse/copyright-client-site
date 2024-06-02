import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  return (
    <div>
        <div className="breadcrumbs" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                    <div className="breadcrumbs-content left">
                        <h1 className="page-title">জিজ্ঞাসা সমূহ</h1> 
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                    <div className="breadcrumbs-content right">
                        <ul className="breadcrumb-nav">
                        <li><Link to="/">হোম পেইজ</Link></li>
                        <li>জিজ্ঞাসা সমূহ</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="faq" className="faq section-bg pt-5 mb-5 pb-0 section">
        <div className="container" data-aos="fade-up">
            <div className="accordion-list">
            <ul>
                <li data-aos="fade-up">
                    <div className="icon-help ms-0">
                        <QuizRoundedIcon /> 
                    </div>
                    
                    <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">জাতীয় তথ্য বাতায়ন কী ?  <div className=" icon-show"> <KeyboardArrowDownRounded/> </div> <div className="icon-close"> <KeyboardArrowUpRounded/> </div> </a>
                    <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                        <p>
                            জাতীয় তথ্য বাতায়ন বিশ্বের অন্যতম বৃহত্তম তথ্য বাতায়ন যা বাংলাদেশের সকল সরকারি অফিসের তথ্য দ্বারা সমৃদ্ধ । সরকারি উদ্যোগে ২৫,০০০ সরকারি প্রতিষ্ঠানের ওয়েবসাইট একসূত্রে সংযুক্ত করার নজির বিশ্বের বুকে সর্বপ্রথম বাংলাদেশেই স্থাপিত হয়েছে। সরকারের প্রতিটি দপ্তরের মাঠ পর্যায় থেকে শুরু করে কেন্দ্রীয় পর্যায়ের সরকারি কর্মকর্তা-কর্মচারিদের নিরলস পরিশ্রমের ফসল এ তথ্য বাতায়ন। সব ধরণের তথ্য ও সেবা ছাড়াও এ বাতায়নে রয়েছে বাংলাদেশের পর্যটন কেন্দ্র, প্রাকৃতিক সৌন্দর্য, পুরাকীর্তি ও ঐতিহাসিক গুরুত্বপূর্ণ স্থাপনার ছবি। সকল সরকারি ওয়েবসাইটকে একত্রে সংযুক্ত করে প্রতিটি নাগরিকের তথ্য ও সেবা প্রাপ্তি নিশ্চিত করতেই এই জাতীয় বাতায়ন করা হয়েছে। স্বচ্ছ, জবাবদিহিমূলক, উদ্ভাবনী ও জনমুখী প্রশাসন প্রতিষ্ঠা এবং সরকার ও নাগরিকের মধ্যকার দূরত্ব কমানোর লক্ষেই এ বাতায়নের যাত্রা। মন্ত্রিপরিষদ বিভাগ ও এটুআই প্রোগ্রামের নেতৃত্ব ও তত্বাবধানে কুমিল্লা জেলায় ছোট পরিসরে পরীক্ষামূলকভাবে এটি শুরু হলেও ক্রমেই এর ব্যাপ্তি বিশাল হয়ে এখন ২৫ হাজার সাইটের অনন্য এক তথ্য ভান্ডারে পরিণত হয়েছে।
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={100}>
                    <div className="icon-help ms-0">
                        <QuizRoundedIcon /> 
                    </div>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">জাতীয় তথ্য বাতায়নের নির্দিষ্ট কোন address/ ঠিকানা আছে কিনা ?  <div className=" icon-show"> <KeyboardArrowDownRounded/> </div> <div className="icon-close"> <KeyboardArrowUpRounded/> </div> </a>
                    <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                        <p>
                        হ্যাঁ আছে। শুধু জাতীয় তথ্য বাতায়ন নয় প্রত্যেকটি বাতায়নের জন্য আলাদা আলাদা address/ঠিকানা আছে। তবে একটি মাত্র ঠিকানা মনে রেখেই সকল বাতায়নের সুবিধা পাওয়া সম্ভব। যেমনঃ www.bangladesh.gov.bd এই ঠিকানা থেকেই সকল বাতায়নে surf করার সুবিধা জাতীয় বাতায়নে রাখা হয়েছে।
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={200}>
                    <div className="icon-help ms-0">
                        <QuizRoundedIcon /> 
                    </div>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">জাতীয় তথ্য বাতায়ন কেন ?  <div className=" icon-show"> <KeyboardArrowDownRounded/> </div> <div className="icon-close"> <KeyboardArrowUpRounded/> </div> </a>
                    <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                        <p>
                        একটা নির্দিষ্ট ফ্রেমওয়ার্কের আওতায় দেশের সকল সরকারি ওয়েবসাইট নির্মাণ করা হয়েছে। রক্ষণাবেক্ষণ ও নিরাপত্তা নিশ্চিতকরা; কেন্দ্র অর্থ্যাৎ মন্ত্রণালয়/বিভাগ থেকে শুরু করে মাঠ পর্যায় পর্যন্ত তথ্য প্রবাহ নিশ্চিত করা; জাতীয় তথ্য বাতায়ন সেবামুখী ও ব্যবহারকারী বান্ধব এবং সহজে হালনাগাদযোগ্য করা হয়েছে। তথ্য অধিকার আইন অনুযায়ী অবাধ তথ্য প্রবাহ নিশ্চিত করা যায়। দেশের ইতিহাস-ঐতিহ্যকে তুলে ধরা এবং জনগণের চাহিদামাফিক সহজে তথ্য প্রাপ্তি নিশ্চিত করার জন্যই জাতীয় তথ্য বাতায়ন তৈরি করা হয়েছে।
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={300}>
                    <div className="icon-help ms-0">
                        <QuizRoundedIcon /> 
                    </div>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"> এই ওয়েব পোর্টালের বিশেষ বৈশিষ্ট্য কি ?  <div className=" icon-show"> <KeyboardArrowDownRounded/> </div> <div className="icon-close"> <KeyboardArrowUpRounded/> </div> </a>
                    <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                        <p>
                        এই ওয়েব পোর্টালকে বাংলাদেশের প্রবেশদ্বার বলা হয় কেননা এই পোর্টালের মাধ্যমে দেশের সরকারি সকল অফিসের সাথে সহজে যোগাযোগ করা যায় এবং সেই সকল অফিস হতে প্রদত্ত সেব সম্পর্কে সম্যক ধারণা লাভ করা যায়। সরকারি অফিসের সকল তথ্য এই ওয়েব পোর্টাল থেকে সংগ্রহ করা যায় যা কিনা অন্য ওয়েবসাইট থেকে সংগ্রহ করা কষ্টকর ও সময়    স্বাপেক্ষ্য।
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay={400}>
                    <div className="icon-help ms-0">
                        <QuizRoundedIcon /> 
                    </div>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed">এই ওয়েব পোর্টালের উদ্দেশ্য কি ? <div className=" icon-show"> <KeyboardArrowDownRounded/> </div> <div className="icon-close"> <KeyboardArrowUpRounded/> </div></a>
                    <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                        <p>
                        একটি ওয়ান স্টপ অনলাইন পোর্টাল হিসেবে বাংলাদেশ সরকারের এই ওয়েব পোর্টাল সরকারি সেবাসমূহের সর্বশেষ তথ্য প্রদান করার লক্ষ্য নিয়ে চালু করা হয়েছে। সকল সরকারি ওয়েবসাইট এবং সেগুলোর তথ্যগুলোকে একটিমাত্র ওয়েব পোর্টালে সমন্বিত করার লক্ষ্যে এটি একটি অন্যতম ই-গভর্নেন্স উদ্যোগ। এই ওয়েব পোর্টালের মাধ্যমেই প্রধানমন্ত্রীর কার্যালয় মন্ত্রিপরিষদ বিভাগের সহযোগিতায় বাংলাদেশ সরকারের সেবাসমূহের সব রকম তথ্য সহজে জনগণের কাছে পৌঁছাতে চায়। প্রাথমিকভাবে বিদ্যমান সেবাসমূহকে সেবার ক্রমানুসারে সজ্জিত করা হয়েছে যা সেবাকুঞ্জ নামীয় সেবা বাতায়নে রয়েছে এবং সেবাসমূহ যাতে খুব সহজেই  প্রদান করা যায় সে লক্ষ্যে সার্ভিস প্রসেস ম্যাপ তৈরি করা হয়েছে।
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </section>
    </div>
  )
}
