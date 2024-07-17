import React, { useState, useEffect } from 'react';
import './Caregiver.css';

const Caregiver = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [modalContent, setModalContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    showTab('appointments');
  }, []);

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  const openVideoCall = (patientName) => {
    const googleMeetURL = 'https://meet.google.com/';
    window.open(googleMeetURL, '_blank');
  };

  const viewDetails = (patientName) => {
    const patientDetails = {
      'Patient A': {
        name: 'Patient A',
        age: 45,
        disease: 'Hypertension',
        weight: '70kg',
        bloodGroup: 'B+',
        medicalHistory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et lacus lacinia scelerisque.'
      },
      'Patient B': {
        name: 'Patient B',
        age: 60,
        disease: 'Diabetes',
        weight: '80kg',
        bloodGroup: 'A+',
        medicalHistory: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      }
    };

    const patient = patientDetails[patientName];
    if (patient) {
      const modalContent = (
        <>
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>{patient.name}</h2>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Disease:</strong> {patient.disease}</p>
          <p><strong>Weight:</strong> {patient.weight}</p>
          <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
          <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
        </>
      );

      setModalContent(modalContent);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const downloadPDF = (fileName) => {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="app">
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo" />
        <h1>Caregiver Dashboard</h1>
      </header>
      <div className="container">
        <nav className="sidebar">
          <div className="profile">
            <img src={`${process.env.PUBLIC_URL}/images/caregiver.jpg`} alt="Profile Picture" />
            <div className="profile-info">
              <h3>Caregiver Name</h3>
              <p>Contact: <a href="tel:+123456789">+123456789</a></p>
              <p>Age: 35</p>
              <p>Profession: Caregiver</p>
            </div>
          </div>
          <ul className="navigation">
            <li><a href="#" onClick={() => showTab('appointments')}><i className="fas fa-calendar-alt"></i> Appointment List</a></li>
            <li><a href="#" onClick={() => showTab('calls')}><i className="fas fa-phone-alt"></i> Scheduled Calls</a></li>
            <li><a href="#" onClick={() => showTab('materials')}><i className="fas fa-book"></i> Learning Materials</a></li>
            <li><a href="#" onClick={() => showTab('profile')}><i className="fas fa-user"></i> Profile of Caregiver</a></li>
            <li><a href="#" onClick={() => showTab('patients')}><i className="fas fa-users"></i> List of Patients</a></li>
          </ul>
        </nav>
        <main>
          <div className="video-background">
            <video autoPlay loop muted>
              <source src={`${process.env.PUBLIC_URL}/videos/backgroundB.mp4`} type="video/mp4" />
            </video>
          </div>
          <div id="appointments" className={`tab ${activeTab === 'appointments' ? 'active' : ''}`}>
            <h2>Appointment List</h2>
            <div className="content">
              <ul className="appointment-list">
                <li>
                  <h3>Patient A</h3>
                  <p>10:00 AM, July 15, 2024</p>
                  <p>Location: Hospital A</p>
                  <button onClick={() => openVideoCall('Patient A')}>Join Call</button>
                  <button onClick={() => viewDetails('Patient A')}>See Details</button>
                </li>
                <li>
                  <h3>Patient B</h3>
                  <p>2:00 PM, July 15, 2024</p>
                  <p>Location: Hospital B</p>
                  <button onClick={() => openVideoCall('Patient B')}>Join Call</button>
                  <button onClick={() => viewDetails('Patient B')}>See Details</button>
                </li>
              </ul>
            </div>
          </div>
          <div id="calls" className={`tab ${activeTab === 'calls' ? 'active' : ''}`}>
            <h2>Scheduled Calls</h2>
            <div className="content">
              <ul className="call-list">
                <li>
                  <h3>Call with Patient A</h3>
                  <p>10:00 AM, July 15, 2024</p>
                  <button onClick={() => openVideoCall('Patient A')}>Join Call</button>
                </li>
                <li>
                  <h3>Call with Patient B</h3>
                  <p>2:00 PM, July 15, 2024</p>
                  <button onClick={() => openVideoCall('Patient B')}>Join Call</button>
                </li>
              </ul>
            </div>
          </div>
          <div id="materials" className={`tab ${activeTab === 'materials' ? 'active' : ''}`}>
            <h2>Learning Materials</h2>
            <div className="content">
              <ul className="material-list">
                <li>
                  <h3>Understanding Hypertension</h3>
                  <p>Comprehensive guide on hypertension management.</p>
                  <button onClick={() => downloadPDF('hypertension.pdf')}>Read PDF</button>
                </li>
                <li>
                  <h3>Managing Diabetes</h3>
                  <p>Insights and best practices for diabetes care.</p>
                  <button onClick={() => downloadPDF('diabetes.pdf')}>Read PDF</button>
                </li>
              </ul>
            </div>
          </div>
          <div id="profile" className={`tab ${activeTab === 'profile' ? 'active' : ''}`}>
            <h2>Profile of Caregiver</h2>
            <div className="content profile-details">
              <img src={`${process.env.PUBLIC_URL}/images/caregiver.jpg`} alt="Caregiver" />
              <div className="details">
                <p><strong>Name:</strong> Caregiver Name</p>
                <p><strong>Contact:</strong> <a href="tel:+123456789">+123456789</a></p>
                <p><strong>Age:</strong> 35</p>
                <p><strong>Profession:</strong> Caregiver</p>
              </div>
            </div>
          </div>
          <div id="patients" className={`tab ${activeTab === 'patients' ? 'active' : ''}`}>
            <h2>List of Patients</h2>
            <div className="content">
              <ul className="patient-list">
                <li>
                  <div className="patient-info">
                    <img src={`${process.env.PUBLIC_URL}/images/patient A.jpg`} alt="Patient A" />
                    <div className="info">
                      <h3>Patient A</h3>
                      <button onClick={() => viewDetails('Patient A')}>See Details</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="patient-info">
                    <img src={`${process.env.PUBLIC_URL}/images/patient B.jpg`} alt="Patient B" />
                    <div className="info">
                      <h3>Patient B</h3>
                      <button onClick={() => viewDetails('Patient B')}>See Details</button>
                    </div>
                  </div>
                </li>
                {/* Add more patients as needed */}
              </ul>
            </div>
          </div>
        </main>
      </div>

      {modalVisible && (
        <div id="modal" className="modal">
          <div className="modal-content">
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default Caregiver;
