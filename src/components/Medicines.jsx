import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faBuilding, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styless/Medicines.css';  // Add this import
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Medicines = () => {
    const [activeTab, setActiveTab] = useState('batches');
    const [showModal, setShowModal] = useState(false);
    const [newBatch, setNewBatch] = useState({
        name: '',
        batchNumber: '',
        expiryDate: '',
        owner: '',
    });
    const [batchesData, setBatchesData] = useState([
        { name: 'Paracetamol', batchNumber: 'B123', expiryDate: '2025-12-31', owner: 'John Doe', status: 'Active' },
        { name: 'Ibuprofen', batchNumber: 'B124', expiryDate: '2025-11-30', owner: 'Jane Smith', status: 'Active' },
        { name: 'dolo', batchNumber: 'b213', expiryDate: '2025-06-09', owner: 'sai', status: 'Active' },
        { name: 'dolo', batchNumber: 'C1234', expiryDate: '2025-05-09', owner: 'saip', status: 'Expired' },
    ]);
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const status = calculateStatus(newBatch.expiryDate);
        const newBatchWithStatus = { ...newBatch, status };
        
        setBatchesData([...batchesData, newBatchWithStatus]);
        setShowModal(false);
        setNewBatch({ name: '', batchNumber: '', expiryDate: '', owner: '' });
    };

    return (
        <div className="medicines-section">
            <div className="medicines-header">
                <h2>Medicines</h2>
                <div className="header-actions">
                    <button 
                        className={`tab ${activeTab === 'batches' ? 'active' : ''}`}
                        onClick={() => setActiveTab('batches')}
                    >
                        <FontAwesomeIcon icon={faUser} /> Batches
                    </button>
                    <button 
                        className={`tab ${activeTab === 'institutes' ? 'active' : ''}`}
                        onClick={() => navigate('/institutes')}
                    >
                        <FontAwesomeIcon icon={faBuilding} /> Institutes
                    </button>
                    <button className="new-batch-btn" onClick={() => setShowModal(true)}>
                        <FontAwesomeIcon icon={faPlus} /> New Batch
                    </button>
                </div>
            </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder={`Search ${activeTab === 'batches' ? 'Batches' : 'Institutes'}`}
                    className="search-input"
                />
            </div>
            {activeTab === 'batches' ? (
                <table className="medicines-table">
                    <thead>
                        <tr>
                            <th>Medicine Name</th>
                            <th>Batch Number</th>
                            <th>Expiry Date</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {batchesData.map((medicine, index) => (
                        <tr key={index}>
                            <td>{medicine.name}</td>
                            <td>{medicine.batchNumber}</td>
                            <td>{medicine.expiryDate}</td>
                            <td>{medicine.owner}</td>
                            <td>
                                <span className={`status ${medicine.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {medicine.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <table className="medicines-table">
                    <thead>
                        <tr>
                            <th>Institute Name</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {institutesData.map((institute, index) => (
                            <tr key={index}>
                                <td>{institute.name}</td>
                                <td>{institute.location}</td>
                                <td>{institute.type}</td>
                                <td>
                                    <span className={`status ${institute.status.toLowerCase()}`}>
                                        {institute.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Add New Batch</h3>
                            <button className="close-btn" onClick={() => setShowModal(false)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Medicine Name</label>
                                <input
                                    type="text"
                                    required
                                    value={newBatch.name}
                                    onChange={(e) => setNewBatch({...newBatch, name: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Batch Number</label>
                                <input
                                    type="text"
                                    required
                                    value={newBatch.batchNumber}
                                    onChange={(e) => setNewBatch({...newBatch, batchNumber: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Expiry Date</label>
                                <input
                                    type="date"
                                    required
                                    value={newBatch.expiryDate}
                                    onChange={(e) => setNewBatch({...newBatch, expiryDate: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Owner</label>
                                <input
                                    type="text"
                                    required
                                    value={newBatch.owner}
                                    onChange={(e) => setNewBatch({...newBatch, owner: e.target.value})}
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
            {/* <Footer /> */}
        </div>
    );
};

export default Medicines;