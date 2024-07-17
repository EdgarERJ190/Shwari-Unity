// PatientLogin.jsx

import React from 'react';
import './PatientLogin.css'; // Import CSS file

const PatientLogin = () => {

    // Function to toggle forms
    const showLoginForm = () => {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupForm").style.display = "none";
        document.getElementById("forgotPasswordForm").style.display = "none";
    }

    const showSignupForm = () => {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupForm").style.display = "block";
        document.getElementById("forgotPasswordForm").style.display = "none";
    }

    // Event listeners for form switching
    const handleSwitchToSignup = (e) => {
        e.preventDefault();
        showSignupForm();
    }

    const handleSwitchToLogin = (e) => {
        e.preventDefault();
        showLoginForm();
    }

    const handleForgotPasswordLink = (e) => {
        e.preventDefault();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("forgotPasswordForm").style.display = "block";
    }

    const handleSwitchToLoginFromForgot = (e) => {
        e.preventDefault();
        showLoginForm();
    }

    // Event listener for login form submission
    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., validate credentials)
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Example validation (replace with your actual logic)
        if (username === "example" && password === "password") {
            // Redirect to patient dashboard
            window.location.href = "patientdash.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }

    // Event listener for signup form submission
    const handleSignupFormSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        alert("Signup form submitted");
    }

    // Event listener for forgot password form submission
    const handleForgotPasswordFormSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        alert("Forgot password form submitted");
    }

    // Initial view setup
    showLoginForm(); // Show login form initially

    return (
        <div>
            <div className="video-container">
                <video autoPlay muted loop id="backgroundVideo">
                    <source src="shwari-unity/src/assets/videos/backgroundB.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="container">
                <div className="form-container">
                    <div className="form-inner">
                        <div className="form-header">
                            <img src="shwari-unity/src/assets/images/logo.png" alt="Logo" className="logo" /> {/* Add your logo here */}
                        </div>
                        <form id="loginForm" className="form" onSubmit={handleLoginFormSubmit}>
                            <div className="input-group">
                                <i className="fas fa-user" />
                                <input type="text" id="loginUsername" placeholder="Username" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock" />
                                <input type="password" id="loginPassword" placeholder="Password" required />
                            </div>
                            <div className="forgot-password">
                                <a href="#" onClick={handleForgotPasswordLink} id="forgotPasswordLink">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn">Login</button>
                            <div className="social-login">
                                <button className="google-login"><i className="fab fa-google" /> Login with Google</button>
                            </div>
                            <div className="form-footer">
                                <p>Don't have an account? <a href="#" onClick={handleSwitchToSignup} id="switchToSignup">Sign up</a></p>
                            </div>
                        </form>

                        <form id="signupForm" className="form hidden" onSubmit={handleSignupFormSubmit}>
                            <div className="input-group">
                                <i className="fas fa-user" />
                                <input type="text" id="signupUsername" placeholder="Username" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-envelope" />
                                <input type="email" id="signupEmail" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <i className="fas fa-lock" />
                                <input type="password" id="signupPassword" placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn">Sign Up</button>
                            <div className="social-login">
                                <button className="google-login"><i className="fab fa-google" /> Sign up with Google</button>
                            </div>
                            <div className="form-footer">
                                <p>Already have an account? <a href="#" onClick={handleSwitchToLogin} id="switchToLogin">Login</a></p>
                            </div>
                        </form>

                        <form id="forgotPasswordForm" className="form hidden" onSubmit={handleForgotPasswordFormSubmit}>
                            <div className="input-group">
                                <i className="fas fa-envelope" />
                                <input type="email" id="forgotPasswordEmail" placeholder="Email" required />
                            </div>
                            <button type="submit" className="btn">Submit</button>
                            <div className="form-footer">
                                <p>Remembered your password? <a href="#" onClick={handleSwitchToLoginFromForgot} id="switchToLoginFromForgot">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientLogin;
