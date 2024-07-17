import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faUserNurse, faUserInjured } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/logo.png';
import slides1 from '../../assets/images/slides1.jpg';
import slides2 from '../../assets/images/slides2.jpg';
import slides3 from '../../assets/images/slides3.jpg';
import slides4 from '../../assets/images/slides4.jpg';
import slides5 from '../../assets/images/slides5.jpg';
import alfred from '../../assets/images/alfred.jpg';
import zakiya from '../../assets/images/zakiya.jpg';
import diana from '../../assets/images/diana.jpg';
import edgar from '../../assets/images/edgar.jpg';

const Home = () => {
  const [aboutUsText, setAboutUsText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const text =
    "Shwari Caregivers are dedicated to taking care of the elderly, providing speech therapy, medication management, and personalized attention. We also specialize in educating postpartum mothers about their health and nutrition, ensuring the well-being of both their babies and themselves.";

  const descriptions = [
    { title: "Compassionate Care", content: "Providing the best care with empathy and understanding." },
    { title: "Advanced Medical Solutions", content: "Utilizing state-of-the-art technology for better outcomes." },
    { title: "Holistic Wellness Programs", content: "Comprehensive programs promoting physical and mental well-being." },
    { title: "Specialized Elderly Care", content: "Tailored care plans designed for the unique needs of seniors." },
    { title: "Maternity Support Services", content: "Expert care and guidance for expectant mothers throughout pregnancy." },
    { title: "Rehabilitation Expertise", content: "Specialized rehabilitation services to aid recovery and improve quality of life." }
  ];

  useEffect(() => {
    let index = 0;
    const typeEffect = () => {
      if (index < text.length) {
        setAboutUsText(prev => prev + text.charAt(index));
        index++;
        setTimeout(typeEffect, 50);
      }
    };
    typeEffect();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [descriptions.length]);

  return (
    <div>
      <div className="banner">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Shwari Caregivers Logo" />
          </div>
          <ul>
            <li><a href="GiftShop.html"><FontAwesomeIcon icon={faGift} /> Gift Shop</a></li>
            <li><a href="Caregiverlogin.html"><FontAwesomeIcon icon={faUserNurse} /> Caregiver Dashboard</a></li>
            <li><a href="patientlogin.html"><FontAwesomeIcon icon={faUserInjured} /> Patient Dashboard</a></li>
          </ul>
        </div>
      </div>

      <div className="ferris-wheel-container">
        <div className="ferris-wheel">
          {descriptions.map((description, index) => (
            <div className="ferris-wheel-slide" key={index}>
              <img src={`slides${index + 1}.jpg`} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="description-box">
          <h2 id="slideTitle">{descriptions[currentIndex].title}</h2>
          <p id="slideContent">{descriptions[currentIndex].content}</p>
        </div>
      </div>

      <div className="section about-us">
        <div className="space-background">
          <div className="typing-container">
            <h2>About Us</h2>
            <p id="aboutUsText">{aboutUsText}</p>
          </div>
        </div>
      </div>

      <div className="section developer">
        <h2>Meet the Team</h2>
        <div className="floating-images">
          <div className="floating-image">
            <div className="circle-image">
              <img src={alfred} alt="Developer 1" />
              <div className="developer-info">
                <h3>Alfred Gitonga</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
          <div className="floating-image">
            <div className="circle-image">
              <img src={zakiya} alt="Developer 2" />
              <div className="developer-info">
                <h3>Zakiya Noor</h3>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>
          <div className="floating-image">
            <div className="circle-image">
              <img src={diana} alt="Developer 3" />
              <div className="developer-info">
                <h3>Diana Mucheke</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="floating-image">
            <div className="circle-image">
              <img src={edgar} alt="Developer 4" />
              <div className="developer-info">
                <h3>Edgar Omondi</h3>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
