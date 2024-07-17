// CaregiverLogin.jsx

import React, { useState } from 'react';
import './CaregiverLogin.css'; // Import your CSS file

const CaregiverLogin = () => {
    const [activeForm, setActiveForm] = useState('login'); // State to manage which form to display

    // Function to handle form switching
    const showLoginForm = () => {
        setActiveForm('login');
    };

    const showSignupForm = () => {
        setActiveForm('signup');
    };

    const showForgotPasswordForm = () => {
        setActiveForm('forgotPassword');
    };

    // Function to handle login form submission
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.loginUsername.value;
        const password = e.target.elements.loginPassword.value;
        
        // Example validation (replace with your actual logic)
        if (username === 'example' && password === 'password') {
            // Redirect to caregiver dashboard
            window.location.href = 'caregiverdash.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    // Function to handle signup form submission
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        alert('Signup form submitted');
    };

    // Function to handle forgot password form submission
    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        alert('Forgot password form submitted');
    };

    return (
        <div>
            <div className="video-container">
                <video autoPlay muted loop id="backgroundVideo">
                    <source src="assets/videos/backgroundB.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="container">
                <div className="form-container">
                    <div className="form-inner">
                        <div className="form-header">
                            <img src="assets/images/logo.png" alt="Logo" className="logo" /> {/* Add your logo here */}
                        </div>
                        <form id="loginForm" className={`form ${activeForm !== 'login' ? 'hidden' : ''}`} onSubmit={handleLoginSubmit}>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" id="loginUsername" name="loginUsername" placeholder="Username" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <input type="password" id="loginPassword" name="loginPassword" placeholder="Password" required />
                            </div>
                            <div className="forgot-password">
                                <a href="#" onClick={showForgotPasswordForm}>Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn">Login</button>
                            <div className="social-login">
                                <button className="google-login"><i className="fab fa-google"></i> Login with Google</button>
                            </div>
                            <div className="form-footer">
                                <p>Don't have an account? <a href="#" onClick={showSignupForm}>Sign up</a></p>
                            </div>
                        </form>

                        <form id="signupForm" className={`form ${activeForm !== 'signup' ? 'hidden' : ''}`} onSubmit={handleSignupSubmit}>
                            <div className="input-group">
                                <i className="fas fa-user"></i>
                                <input type="text" id="signupUsername" name="signupUsername" placeholder="Username" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-envelope"></i>
                                <input type="email" id="signupEmail" name="signupEmail" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock"></i>
                                <input type="password" id="signupPassword" name="signupPassword" placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn">Sign Up</button>
                            <div className="social-login">
                                <button className="google-login"><i className="fab fa-google"></i> Sign up with Google</button>
                            </div>
                            <div className="form-footer">
                                <p>Already have an account? <a href="#" onClick={showLoginForm}>Login</a></p>
                            </div>
                        </form>

                        <form id="forgotPasswordForm" className={`form ${activeForm !== 'forgotPassword' ? 'hidden' : ''}`} onSubmit={handleForgotPasswordSubmit}>
                            <div className="input-group">
                                <i className="fas fa-envelope"></i>
                                <input type="email" id="forgotPasswordEmail" name="forgotPasswordEmail" placeholder="Email" required />
                            </div>
                            <button type="submit" className="btn">Submit</button>
                            <div className="form-footer">
                                <p>Remembered your password? <a href="#" onClick={showLoginForm}>Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaregiverLogin;
