import React, { useState } from 'react';
import '../styless/Employees.css';

const initialEmployees = [
    {
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
        bloodGroup: 'A+',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        name: 'Jane Smith',
        phone: '987-654-3210',
        email: 'jane.smith@example.com',
        bloodGroup: 'B-',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: 'Alex Brown',
        phone: '555-123-4567',
        email: 'alex.brown@example.com',
        bloodGroup: 'O+',
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
];

const Employees = () => {
    const [employees, setEmployees] = useState(initialEmployees);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        bloodGroup: '',
        image: ''
    });

    const handleAddEmployeeClick = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmployees([
            ...employees,
            {
                ...formData,
                image: formData.image || 'https://randomuser.me/api/portraits/lego/1.jpg'
            }
        ]);
        setFormData({
            name: '',
            phone: '',
            email: '',
            bloodGroup: '',
            image: ''
        });
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
        setFormData({
            name: '',
            phone: '',
            email: '',
            bloodGroup: '',
            image: ''
        });
    };

    return (
        <div className="employees-container">
            <div className="employees-header">
                <h2>Employees</h2>
                <button className="add-employee-btn" onClick={handleAddEmployeeClick}>
                    + Add Employee
                </button>
            </div>
            {showForm && (
                <form className="employee-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="bloodGroup"
                        placeholder="Blood Group"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL (optional)"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <div className="form-btns">
                        <button type="submit" className="add-employee-btn">Submit</button>
                        <button type="button" className="add-employee-btn cancel-btn" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            )}
            <div className="employees-flex">
                {employees.map((emp, idx) => (
                    <div className="employee-card" key={idx}>
                        <img src={emp.image} alt={emp.name} className="employee-img" />
                        <div className="employee-info">
                            <h3>{emp.name}</h3>
                            <p><strong>Phone:</strong> {emp.phone}</p>
                            <p><strong>Email:</strong> {emp.email}</p>
                            <p><strong>Blood Group:</strong> {emp.bloodGroup}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Employees;