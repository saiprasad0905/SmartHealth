import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styless/Institute.css';
import { useNavigate } from 'react-router-dom';

const Institutes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newInstitute, setNewInstitute] = useState({
        name: '',
        type: '',
        location: '',
        patents: ''
    });
    const [institutesData, setInstitutesData] = useState([
        { name: 'Mayo Clinic', type: 'Hospital', location: 'USA', patents: 5 },
        { name: 'Harvard', type: 'Research', location: 'USA', patents: 10 },
        { name: 'Novartis', type: 'Pharma', location: 'Switzerland', patents: 20 },
        { name: 'AIIMS', type: 'Hospital', location: 'India', patents: 8 },
        { name: 'Pfizer', type: 'Research', location: 'Germany', patents: 12 },
    ]);
    const navigate = useNavigate();

    const filteredInstitutes = institutesData.filter(institute =>
        institute.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        institute.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        institute.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewMore = (institute) => {
        // Handle view more action
        console.log('View more:', institute);
    };

    const handleAddInstitute = (e) => {
        e.preventDefault();
        setInstitutesData([
            ...institutesData,
            { ...newInstitute, patents: Number(newInstitute.patents) }
        ]);
        setShowModal(false);
        setNewInstitute({ name: '', type: '', location: '', patents: '' });
    };
    

    return (
        <div className="institutes-container">
            <div className="institutes-header">
                <h1>Medicines</h1>
                <h2>List of Institutes</h2>
                <div className="search-container">
                    <div className="search-bar">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search Institute"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                     <button className="add-institute-btn" onClick={() => setShowModal(true)} style={{ marginLeft: '20px', background: '#1976d2', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faPlus} /> Add Institute
                    </button>
                </div>
            </div>

            <table className="institutes-table">
                <thead>
                    <tr>
                        <th>Institute Name</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Associated Patents</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredInstitutes.map((institute, index) => (
                        <tr key={index}>
                            <td>{institute.name}</td>
                            <td>{institute.type}</td>
                            <td>{institute.location}</td>
                            <td>{institute.patents}</td>
                            <td>
                                <button 
                                    className="view-more-btn"
                                    onClick={() => handleViewMore(institute)}
                                >
                                    View More
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>{showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Add New Institute</h3>
                            <button className="close-btn" onClick={() => setShowModal(false)}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleAddInstitute}>
                            <div className="form-group">
                                <label>Institute Name</label>
                                <input
                                    type="text"
                                    required
                                    value={newInstitute.name}
                                    onChange={(e) => setNewInstitute({ ...newInstitute, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Type</label>
                                <input
                                    type="text"
                                    required
                                    value={newInstitute.type}
                                    onChange={(e) => setNewInstitute({ ...newInstitute, type: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input
                                    type="text"
                                    required
                                    value={newInstitute.location}
                                    onChange={(e) => setNewInstitute({ ...newInstitute, location: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Associated Patents</label>
                                <input
                                    type="number"
                                    required
                                    value={newInstitute.patents}
                                    onChange={(e) => setNewInstitute({ ...newInstitute, patents: e.target.value })}
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="submit" className="submit-btn">Submit</button>
                                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            <div className="sidebar">
                <div className="sidebar-header">Dashboard</div>
                <ul className="sidebar-menu">
                    <li className="menu-item" onClick={() => navigate('/medicines')}>Medicines</li>
                    <li className="menu-item" onClick={() => navigate('/diagnostics')}>Diagnostics</li>
                    <li className="menu-item" onClick={() => navigate('/reports')}>Reports</li>
                    <li className="menu-item" onClick={() => navigate('/employees')}>Employees</li>
                    <li className="menu-item" onClick={() => navigate('/ledger')}>Ledger</li>
                    <li className="menu-item" onClick={() => navigate('/settings')}>Settings</li>
                    <li className="menu-item" onClick={() => navigate('/logout')}>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default Institutes;
