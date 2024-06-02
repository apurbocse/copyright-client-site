import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { Home } from '@mui/icons-material';

export default function ForgotPassword() {
    return (
        <div className="container-fluid mt-0 bodyyyy heightpage d-flex justify-content-center align-items-center">
            <div className="row justify-content-center w-100">
                <div className="col-md-4">
                    <div className="register-container">
                        <div className="register-logo">
                            <img src="assets/images/logo3.png" alt="Logo" />
                        </div>
                        <div className="down-container">
                            <div className="d-flex mb-2 justify-content-between">
                                <h6>পাসওয়ার্ড ভুলে গেছেন?</h6>
                                <Link to="/"> <Home /> হোম পেইজ</Link>
                            </div>
                            <form className="register-form" action="#" method="post">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" name="email" placeholder="আপনার ইমেইল" required />
                                    </div>
                                </div>
                                <button type="submit" id="submitButton" className="col-md-12">রিসেট লিংক পাঠান</button>
                                <div className="mt-3">
                                    <Link to="/user-login" className="register-link mr-2">লগইন করতে ক্লিক করুন ( লগইন করুন )</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
