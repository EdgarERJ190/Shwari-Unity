import React, { useState } from 'react';
import './Elders.css'; // Import CSS file for styling

const ElderlyCareDashboard = () => {
  const [activeTab, setActiveTab] = useState('consultations');
  const [modalContent, setModalContent] = useState('');
  const [therapyVideoVisible, setTherapyVideoVisible] = useState(false);

  // Function to show a specific tab and hide others
  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to join a doctor consultation
  const joinConsultation = (doctorName) => {
    showModal(`Joining consultation with ${doctorName}`);
  };

  // Function to prescribe medication
  const prescribeMedication = (doctorName) => {
    showModal(`Prescribing medication by ${doctorName}`);
  };

  // Function to show prescribed medications
  const showPrescribedMedications = (doctorName) => {
    showModal(`Showing prescribed medications by ${doctorName}`);
  };

  // Function to start Google Meet session for therapy
  const startGoogleMeet = () => {
    setTherapyVideoVisible(true);
  };

  // Function to set medication reminder
  const setMedicationReminder = () => {
    const medicationTime = document.getElementById('medication-time').value;
    showModal(`Medication reminder set for ${medicationTime}`);
  };

  // Function to display modal with content
  const showModal = (content) => {
    setModalContent(content);
  };

  // Function to close modal
  const closeModal = () => {
    setModalContent('');
  };

  // Function to generate bubbles for AI Mental Trainer
  const generateBubbles = () => {
    const quotes = [
      "You're never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "The only way to do great work is to love what you do. - Steve Jobs",
      "It always seems impossible until it's done. - Nelson Mandela",
      "The best way to predict the future is to create it. - Abraham Lincoln",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller"
    ];

    return quotes.map((quote, index) => (
      <div key={index} className="bubble">{quote}</div>
    ));
  };

  return (
    <div className="container">
      {/* Sidebar with logo and navigation */}
      <aside className="sidebar">
        <div className="profile">
          <img src="shwari-unity/src/assets/images/caregiver.jpg" alt="Caregiver Avatar" />
          <div className="profile-info">
            <h3>Caregiver Name</h3>
            <p>Age: 45</p>
            <p>Profession: Caregiver</p>
          </div>
        </div>
        <ul className="navigation">
          <li><a href="#" onClick={() => showTab('consultations')}><i className="fas fa-calendar-alt"></i> Consultations</a></li>
          <li><a href="#" onClick={() => showTab('therapy')}><i className="fas fa-headset"></i> Live Speech Therapy</a></li>
          <li><a href="#" onClick={() => showTab('medication')}><i className="fas fa-pills"></i> Medication Reminder</a></li>
          <li><a href="#" onClick={() => showTab('motivation')}><i className="fas fa-film"></i> Motivation/Movie Streaming</a></li>
          <li><a href="#" onClick={() => showTab('mental-trainer')}><i className="fas fa-brain"></i> AI Mental Trainer</a></li>
          <li><a href="#" onClick={() => showTab('profile')}><i className="fas fa-user"></i> Profile</a></li>
        </ul>
      </aside>

      {/* Main content area */}
      <main>
        {/* Consultations tab */}
        <div id="consultations" className={`tab ${activeTab === 'consultations' ? 'active' : ''}`}>
          <h2>Doctor Consultations</h2>
          <ul className="consultation-list">
            <li>
              <div className="doctor-info">
                <img src="shwari-unity/src/assets/images/doctor.jpg" alt="Doctor Avatar" />
                <div className="info">
                  <h3>Dr. Smith</h3>
                  <p>Specialty: Geriatrics</p>
                </div>
              </div>
              <button onClick={() => joinConsultation('Dr. Smith')}>Join Consultation</button>
              <button onClick={() => prescribeMedication('Dr. Smith')}>Prescribe Medication</button>
              <button onClick={() => showPrescribedMedications('Dr. Smith')}>Show Prescribed Medications</button>
            </li>
            {/* Add more consultations as needed */}
          </ul>
        </div>

        {/* Live Speech Therapy tab */}
        <div id="therapy" className={`tab ${activeTab === 'therapy' ? 'active' : ''}`}>
          <h2>Live Speech Therapy</h2>
          <button onClick={startGoogleMeet}>Join Therapy Session</button>
          <div id="therapy-video" className={therapyVideoVisible ? '' : 'hidden'}>
            <iframe title="Therapy Video" src="https://meet.google.com/your-meeting-id" width="100%" height="400" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        {/* Medication Reminder tab */}
        <div id="medication" className={`tab ${activeTab === 'medication' ? 'active' : ''}`}>
          <h2>Medication Reminder</h2>
          <ul className="medication-list">
            <li>
              <h3>Medication A</h3>
              <input type="datetime-local" id="medication-time" />
              <button onClick={setMedicationReminder}>Set Reminder</button>
            </li>
            {/* Add more medications as needed */}
          </ul>
        </div>

        {/* Motivation/Movie Streaming tab */}
        <div id="motivation" className={`tab ${activeTab === 'motivation' ? 'active' : ''}`}>
          <h2>Motivation/Movie Streaming</h2>
          <p>Watch motivational videos or stream movies to lift spirits.</p>
          <div id="motivation-video">
            <iframe title="Motivation Video" width="100%" height="315" src="https://www.youtube.com/embed/your-video-id" frameBorder="0" allowFullScreen></iframe>
            <textarea id="motivation-notes" placeholder="Write your notes here..."></textarea>
          </div>
        </div>

        {/* AI Mental Trainer tab */}
        <div id="mental-trainer" className={`tab ${activeTab === 'mental-trainer' ? 'active' : ''}`}>
          <h2>AI Mental Trainer</h2>
          <div className="bubble-container" id="bubble-container">
            {generateBubbles()}
          </div>
        </div>

        {/* Profile tab */}
        <div id="profile" className={`tab ${activeTab === 'profile' ? 'active' : ''}`}>
          <h2>Caregiver Profile</h2>
          <div className="profile-details">
            <img src="shwari-unity/src/assets/images/caregiver.jpg" alt="Caregiver Avatar" />
            <div className="details">
              <h3>Caregiver Name</h3>
              <p>Age: 45</p>
              <p>Profession: Caregiver</p>
              <p>Health Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <textarea id="profile-notes" placeholder="Add notes about the elderly..."></textarea>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

};

export default ElderlyCareDashboard;
