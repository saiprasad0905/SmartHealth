import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faPills, faStethoscope, faUserMd, faHospital, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    return (
        <div className="homepage">
<<<<<<< HEAD
            <div className="content-wrapper">
                <div className="left-section">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faHeartbeat} className="health-icon" />
                        <div className="floating-icons">
                            <FontAwesomeIcon icon={faPills} className="float-icon pills" />
                            <FontAwesomeIcon icon={faStethoscope} className="float-icon stethoscope" />
                            <FontAwesomeIcon icon={faUserMd} className="float-icon doctor" />
                            <FontAwesomeIcon icon={faHospital} className="float-icon hospital" />
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <h1>Efficient & Smart Healthcare</h1>
                    <h2>Management</h2>
                    <button className="get-started-btn" onClick={handleGetStarted}>
                        Get Started!
                    </button>
                </div>
            </div>
=======
            <h1>Welcome</h1>
            <h2>Efficient and Smart Health Management</h2>
            <button className="btn" onClick={handleGetStarted}>
                Get Started
            </button>
            <footer className="footer">
                <p>© 2025 Smart Health Management. All rights reserved.</p>
            </footer>
>>>>>>> origin/main
        </div>
    );
};

export default Homepage;
