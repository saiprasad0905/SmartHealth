import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [form, setForm] = useState({
        employeeId: '',
        password: '',
        rememberMe: false
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setForm({
            ...form,
            [name]: name === 'rememberMe' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { employeeId, password } = form;
        
        if (!employeeId || !password) {
            return;
        }
        
        // Demo credentials check
        if (employeeId === '1234' && password === '1234') {
            navigate('/first');
        } else {
            // Optional: Add error handling for invalid credentials
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleGoogleSignIn = () => {
        //  navigate('/Googlesignin');
      alert('Google Sign-In is currently under construction.');
    };

    return (
        <div className="auth-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Welcome back</h2>
                <div className="form-group">
                    <label htmlFor="employeeId">Employee ID</label>
                    <input
                        type="text"
                        id="employeeId"
                        name="employeeId"
                        value={form.employeeId}
                        onChange={handleChange}
                        placeholder="Enter your Employee ID"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>

                <div className="form-options">
                    <label className="remember-me">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={form.rememberMe}
                            onChange={handleChange}
                        />
                        Remember me
                    </label>
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" className="signin-btn">Sign In</button>
                
                <button type="button" className="google-signin" onClick={handleGoogleSignIn}>
                    <FontAwesomeIcon icon={faGoogle} />
                    Sign in with Google
                </button>

                <div className="auth-footer">
                    <span>Don't have an account?</span>
                    <button type="button" className="signup-link" onClick={() => navigate('/signup')}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;