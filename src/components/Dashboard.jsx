import React from 'react';
import '../styless/Dashboard.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Patient Visits',
            data: [1925, 1850, 2250, 1800, 2100, 2300],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
        }]
    };

    const patientData = [
        { id: 'Patient 1', date: 'Feb 12, 2024', diagnosis: 'Fever', status: 'Completed' },
        { id: 'Patient 2', date: 'Feb 13, 2024', diagnosis: 'Headache', status: 'Pending' },
        { id: 'Patient 3', date: 'Feb 14, 2024', diagnosis: 'Cold', status: 'In Progress' },
        { id: 'Patient 4', date: 'Feb 15, 2024', diagnosis: 'Cough', status: 'Completed' },
    ];

    return (
        <div className="dashboard-container">
            <nav className='Sai'>
            <h1>Welcome Dr. Sai</h1></nav>
            
            <div className="stats-cards">
                <div className="stat-card">
                    <h3>₹ 23,425</h3>
                    <p>Revenue</p>
                </div>
                <div className="stat-card">
                    <h3>1,925</h3>
                    <p>Total Patients</p>
                </div>
                <div className="stat-card">
                    <h3>553</h3>
                    <p>Appointments</p>
                </div>
            </div>

            <div className="charts-row">
                <div className="chart-container">
                    <h2>Patient Visit Trends</h2>
                    <Line data={chartData} options={{ 
                        responsive: true,
                        maintainAspectRatio: true,
                        aspectRatio: 2,  // Reduced from 2.5 to make chart taller
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    font: {
                                        size: 14  // Increased font size
                                    }
                                }
                            },
                            x: {
                                ticks: {
                                    font: {
                                        size: 14  // Increased font size
                                    }
                                }
                            }
                        }
                    }} />
                </div>
                
                <div className="donut-chart">
                    <h3>Patient Statistics</h3>
                    <div className="chart-placeholder">
                        45.2K
                    </div>
                </div>
            </div>

            <div className="upcoming-appointments">
                <h3>Recent Patients</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Date</th>
                            <th>Diagnosis</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientData.map((patient, index) => (
                            <tr key={index}>
                                <td>{patient.id}</td>
                                <td>{patient.date}</td>
                                <td>{patient.diagnosis}</td>
                                <td>
                                    <span className={`status ${patient.status.toLowerCase()}`}>
                                        {patient.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;