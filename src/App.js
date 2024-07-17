// App.jsx or App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importing components
import Caregiver from './components/Caregiver/Caregiver';
import CaregiverLogin from './components/Caregiver/CaregiverLogin';
import Elders from './components/Elders/Elders';
import GiftShop from './components/GiftShop/GiftShop';
import Home from './components/Home/Home';
import Mother from './components/Mother/Mother';
import PatientLogin from './components/PatientLogin/PatientLogin';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>Medical Care Center</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/elders">Elders</Link></li>
            <li><Link to="/patient-login">Patient Login</Link></li>
            <li><Link to="/caregiver">Caregiver</Link></li>
            <li><Link to="/caregiver-login">Caregiver Login</Link></li>
            <li><Link to="/gift-shop">Gift Shop</Link></li>
            <li><Link to="/mother">Mother</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elders" element={<Elders />} />
          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/caregiver" element={<Caregiver />} />
          <Route path="/caregiver-login" element={<CaregiverLogin />} />
          <Route path="/gift-shop" element={<GiftShop />} />
          <Route path="/mother" element={<Mother />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2024 Medical Care Center. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
