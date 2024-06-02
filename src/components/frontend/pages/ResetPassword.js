import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { Home } from '@mui/icons-material';

export default function ForgotPassword() {
    const togglePassword = (fieldId) => {
        const passwordField = document.getElementById(fieldId);
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    };
    return (
        <div className="container-fluid mt-0 bodyyyy heightpage justify-content-center align-items-center">
            <div className="row justify-content-center w-100">
                <div className="col-md-4">
                    <div className="register-container">
                        <div className="register-logo">
                            <img src="assets/images/logo3.png" alt="Logo" />
                        </div>
                        <div className="down-container">
                            <div className="d-flex mb-2 justify-content-between">
                                <h6>পাসওয়ার্ড পরিবর্তন করুন</h6>
                                <Link to="/"> <Home /> হোম পেইজ</Link>
                            </div>
                            <form className="register-form" action="#" method="post">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="password-container">
                                            <input type="password" name="password" id="password" placeholder="নতুন পাসওয়ার্ড সেট করুন" required />
                                            <span className="show-password" onClick={() => togglePassword('password')}>👁️</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="password-container">
                                            <input type="password" name="passwordretype" id="password2" placeholder="নতুন পাসওয়ার্ড নিশ্চিত করুন" required />
                                            <span className="show-password" onClick={() => togglePassword('password2')}>👁️</span>
                                        </div>
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
