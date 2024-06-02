import React from 'react'
import { Link } from 'react-router-dom'

export default function Documents() {
  return (
    <div>
        <div className="breadcrumbs" data-stellar-background-ratio="0.5">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content left">
                    <h1 className="page-title">সংযুক্তির নমুনা  </h1> 
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                <div className="breadcrumbs-content right">
                    <ul className="breadcrumb-nav">
                    <li><Link to="/">হোম পেইজ</Link></li>
                    <li>সংযুক্তির নমুনা </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>

        <section className="pt-5 mb-5 pb-0 section">
            <div className="container" data-aos="fade-up">
                <div className="row mx-1 justify-content-center">
                <div className="col-lg-12 card">
                    <div className="row">
                    <div className="col-md-12 py-2 d-flex justify-content-center">
                        <ul className="nav nav-pills w-100" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link border active my-1 mx-1" id="angikar_tab" data-bs-toggle="tab" href="#angikar" role="tab" aria-controls="angikar" aria-selected="true">অঙ্গীকারনামা</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link border my-1 mx-1" id="hastantar_dalil_tab" data-bs-toggle="tab" href="#hastantar_dalil" role="tab" aria-controls="hastantar_dalil" aria-selected="false">কপিরাইট হস্তান্তর দলিল</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link border my-1 mx-1" id="prachchadkarm_tab" data-bs-toggle="tab" href="#prachchadkarm" role="tab" aria-controls="prachchadkarm" aria-selected="false">প্রচ্ছদকর্মের স্বত্ব হস্তান্তর</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link border my-1 mx-1" id="kshamota_patra_tab" data-bs-toggle="tab" href="#kshamota_patra" role="tab" aria-controls="kshamota_patra" aria-selected="false">ক্ষমতা অর্পণ পত্র</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="angikar" role="tabpanel" aria-labelledby="angikar_tab">
                            <div className="card border-0">
                            <div className="card-body">
                                <iframe src="assets/images/o8.pdf" width="100%" height="900px" />
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="hastantar_dalil" role="tabpanel" aria-labelledby="hastantar_dalil_tab">
                            <div className="card border-0">
                            <div className="card-body">
                                <iframe src="assets/images/o10.pdf" width="100%" height="900px" />
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="prachchadkarm" role="tabpanel" aria-labelledby="prachchadkarm_tab">
                            <div className="card border-0">
                            <div className="card-body">
                                <iframe src="assets/images/o11.pdf" width="100%" height="900px" />
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="kshamota_patra" role="tabpanel" aria-labelledby="kshamota_patra_tab">
                            <div className="card border-0">
                            <div className="card-body">
                                <iframe src="assets/images/o12.pdf" width="100%" height="900px" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
