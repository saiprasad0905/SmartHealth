import React from 'react';
import '../styless/Settings.css';

const Settings = () => {
    return (
        <div className="settings-container">
            <div className="settings-header">
                <h2>Settings</h2>
            </div>
            <div className="settings-content">
                <div className="settings-section">
                    <h3>General Settings</h3>
                    <div className="setting-item">
                        <label>Language</label>
                        <select>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>
                    <div className="setting-item">
                        <label>Time Zone</label>
                        <select>
                            <option>UTC</option>
                            <option>GMT</option>
                            <option>IST</option>
                        </select>
                    </div>
                </div>
                
                <div className="settings-section">
                    <h3>Notifications</h3>
                    <div className="setting-item">
                        <label>Email Notifications</label>
                        <input type="checkbox" />
                    </div>
                    <div className="setting-item">
                        <label>SMS Alerts</label>
                        <input type="checkbox" />
                    </div>
                </div>

                <div className="settings-section">
                    <h3>Security</h3>
                    <div className="setting-item">
                        <label>Change Password</label>
                        <button>Update</button>
                    </div>
                    <div className="setting-item">
                        <label>Two-Factor Authentication</label>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;