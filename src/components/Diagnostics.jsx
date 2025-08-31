import React from 'react';
import '../styless/Diagnostics.css';

const Diagnostics = () => {
    return (
        <div className="diagnostics-container">
            <div className="diagnostics-header">
                <h2>Diagnostics</h2>
                <div className="header-actions">
                    <button className="tab active">Patients</button>
                    <button className="tab">Reports</button>
                    <button className="new-entry-btn">
                        <span className="plus-icon">+</span> New Entry
                    </button>
                </div>
            </div>
            <div className="diagnostics-form">
                <div className="form-left">
                    <div className="form-group">
                        <label>Patient Name:</label>
                        <input type="text" placeholder="Enter name of patient" />
                    </div>
                    <div className="form-group age-gender">
                        <div className="age-input">
                            <label>Age:</label>
                            <input type="number" placeholder="Age" />
                        </div>
                        <div className="gender-input">
                            <label>Gender:</label>
                            <select>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Doctor's Name:</label>
                        <input type="text" placeholder="Enter name of doctor" />
                    </div>
                    <div className="form-group">
                        <label>Date of Test:</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>Test Name:</label>
                        <input type="text" placeholder="Enter name of Test" />
                    </div>
                </div>
                <div className="form-right">
                    <div className="form-group">
                        <label>Notes:</label>
                        <textarea placeholder="Type anything here..."></textarea>
                    </div>
                    <div className="form-group">
                        <label>Test Urgency Level:</label>
                        <select>
                            <option value="">Select</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Pre Test Requirements:</label>
                        <input type="text" placeholder="Enter pre-test requirements" />
                    </div>
                    <div className="form-group upload-section">
                        <label>Upload Report:</label>
                        <div className="upload-area">
                            <span>Click to Upload or drag and drop</span>
                            <span className="file-type">(Max file size 25 MB)</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="submit-btn">SUBMIT</button>
        </div>
    );

};

export default Diagnostics;