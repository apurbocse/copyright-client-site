import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';

export default function Applications() {
    return (
        <div>
            <section className="section py-5 service-single">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center bg-light">
                        <div className="card p-3 shadow w-100">
                            <nav>
                                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-application-tab" data-bs-toggle="tab" data-bs-target="#nav-application" type="button" role="tab" aria-controls="nav-application" aria-selected="true">আবেদন সমূহ</button>
                                </div>
                            </nav>
                            <div className="tab-content p-3 border bg-light" id="nav-tabContent">
                                <div className="tab-pane fade active show" id="nav-application" role="tabpanel" aria-labelledby="nav-application-tab">
                                    <div className='user-application-list' style={{ overflowX: 'auto' }}>
                                        <table className='table table-striped w-100'>
                                            <thead>
                                                <tr>
                                                    <td>ক্রমিক নং.</td>
                                                    <td>ধরণ</td>
                                                    <td>ট্র্যাকিং নম্বর</td>
                                                    <td>প্রেরণের তারিখ</td>
                                                    <td>ট্রেজারি/ট্রানজেকশন নং</td>
                                                    <td>ট্রেজারি তারিখ</td>
                                                    <td>ব্যাংকের নাম</td>
                                                    <td>শাখা</td>
                                                    <td>১ম ধাপ</td>
                                                    <td>২য় ধাপ</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>১</td>
                                                    <td>সাধারণ</td>
                                                    <td>ABCD1234</td>
                                                    <td>01/05/2024</td>
                                                    <td>1234567890</td>
                                                    <td>01/05/2024</td>
                                                    <td>স্টেট ব্যাংক</td>
                                                    <td>ঢাকা</td>
                                                    <td>
                                                        <Link className='me-2' title="দেখুন"><RemoveRedEyeIcon/></Link>
                                                        <Link title="সম্পাদন করুন"><CreateIcon/></Link>
                                                    </td>
                                                    <td>
                                                        <Link title="অগ্রসর হউন"><DoubleArrowIcon/></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>২</td>
                                                    <td>সাধারণ</td>
                                                    <td>ABCD1234</td>
                                                    <td>01/05/2024</td>
                                                    <td>1234567890</td>
                                                    <td>01/05/2024</td>
                                                    <td>স্টেট ব্যাংক</td>
                                                    <td>ঢাকা</td>
                                                    <td>
                                                        <Link className='me-2' title="দেখুন"><RemoveRedEyeIcon/></Link>
                                                        <Link title="সম্পাদন করুন"><CreateIcon/></Link>
                                                    </td>
                                                    <td>
                                                        <Link title="দেখুন"><RemoveRedEyeIcon/></Link>
                                                    </td>
                                                </tr>
                                                {/* Add more rows here if needed */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
