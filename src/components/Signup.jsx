import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/Signup.css'; 

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        employeeId: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { employeeId, username, email, password, confirmPassword } = form;

        if (!employeeId || !username || !email || !password || !confirmPassword) {
            return;
        }

        if (password !== confirmPassword) {
            return;
        }

        // Store user data and redirect to login
        localStorage.setItem('userData', JSON.stringify({ employeeId, username, email }));
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                
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
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Choose a username"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
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
                        placeholder="Create a password"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                    />
                </div>

                <button type="submit" className="signup-btn">Create Account</button>

                <div className="auth-footer">
                    <span>Already have an account?</span>
                    <button type="button" className="login-link" onClick={() => navigate('/login')}>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
