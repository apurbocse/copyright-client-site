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
            <div className="row justify-content-center  w-100">
                <div className="col-md-4">
                    <div className="register-container">
                        <div className="register-logo">
                            <img src="assets/images/logo3.png" alt="Logo" />
                        </div>
                        <div className="down-container">
                            <div className="d-flex mb-2 justify-content-between">
                                <h6>লগইন করুন</h6>
                                <Link to="/"> <Home /> হোম পেইজ</Link>
                            </div>
                            <form className="register-form" action="#" method="post">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="email" name="email" placeholder="আপনার ইমেইল" required />
                                    </div>

                                    <div className="col-md-12">
                                        <div className="password-container">
                                            <input type="password" name="password" id="password" placeholder="পাসওয়ার্ড সেট করুন" required />
                                            <span className="show-password" onClick={() => togglePassword('password')}>👁️</span>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submitButton" className="col-md-12"> লগইন করুন</button>
                                <div className="d-flex mt-2 justify-content-between">
                                    <Link to="/user-register" className="register-link mr-2"> রেজিস্ট্রেশন করুন</Link>
                                    <Link to="/forgot-password" className="forgot-password"> পাসওয়ার্ড ভুলে গেছেন ?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
