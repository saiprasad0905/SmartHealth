<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styless/First.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPills, faStethoscope, faFileAlt, faUsers, faBook, faCog, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
import Medicines from './Medicines';
import Diagnostics from './Diagnostics';
import Reports from './Reports';
import Employees from './Employees';
import Ledger from './Ledger';
import Settings from './Settings';
=======
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styless/First.css'; // Import the CSS file for styling
>>>>>>> origin/main

const First = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const renderContent = () => {
        switch(activeSection) {
            case 'dashboard':
                return <Dashboard />;
            case 'medicines':
                return <Medicines />;
            case 'diagnostics':
                return <Diagnostics />;
            case 'reports':
                return <Reports />;
            case 'employees':
                return <Employees />;
            case 'ledger':
                return <Ledger />;
            case 'settings':
                return <Settings />;
            default:
                return <Dashboard />;
        }
    };

    return (
        
        <div className="container">
            <nav className="vertical-navbar">
                {/* <h1>Medicines</h1> */}
                <ul>
<<<<<<< HEAD
                    <li onClick={() => setActiveSection('dashboard')}>
                        <FontAwesomeIcon icon={faHome} /> Dashboard
                    </li>
                    <li onClick={() => setActiveSection('medicines')}>
                        <FontAwesomeIcon icon={faPills} /> Medicines
                    </li>
                    <li onClick={() => setActiveSection('diagnostics')}>
                        <FontAwesomeIcon icon={faStethoscope} /> Diagnostics
                    </li>
                    <li onClick={() => setActiveSection('reports')}>
                        <FontAwesomeIcon icon={faFileAlt} /> Reports
                    </li>
                    <li onClick={() => setActiveSection('employees')}>
                        <FontAwesomeIcon icon={faUsers} /> Employees
                    </li>
                    <li onClick={() => setActiveSection('ledger')}>
                        <FontAwesomeIcon icon={faBook} /> Ledger
                    </li>
                    <li onClick={() => setActiveSection('settings')}>
                        <FontAwesomeIcon icon={faCog} /> Settings
                    </li>
                    <li className="logout" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </li>
                </ul>
            </nav>
            <div className="main-content">
                {renderContent()}
=======
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/diagnostics">Diagnostics</Link>
                    </li>
                    <li>
                        <Link to="/prescription">Prescription/Consultation</Link>
                    </li>
                    <li>
                        <Link to="/first">Medicines</Link>
                    </li>
                    <li>
                        <Link to="/reports">Reports</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                    <li>
                        <Link to="/ledger">Ledger</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            
            <div className="content">

                
                <Link className="patents" to="/patents">Batches</Link>
                <Link className="doctors" to="/institutes">Institutes</Link>
>>>>>>> origin/main
            </div>
            <footer className="footer">
                <p>© 2025 Smart Health Management. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default First;
