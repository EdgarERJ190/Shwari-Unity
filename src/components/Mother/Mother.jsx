// MommyDashboard.jsx

import React, { useEffect } from 'react';
import './Mother.css'; // Import your CSS file

const MommyDashboard = () => {

    useEffect(() => {
        showTab('postpartum-class');
        generateCarouselItems();
        generateNutritionIcons();
        generateVaccineList();
        generateMotherProfile();
    }, []);

    const showTab = (tabId) => {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    };

    const joinPostpartumClass = () => {
        window.open("https://meet.google.com/your-meeting-id", "_blank");
    };

    const generateCarouselItems = () => {
        const carousel = document.getElementById('quotes-carousel');
        const quotes = [
            "The journey of motherhood...",
            "Cherish every moment...",
            "Your love is powerful...",
            "You're doing great!",
            "Enjoy the little things...",
            "Strength in motherhood...",
            "Celebrate your journey...",
            "Embrace the challenges...",
            "Motherhood is beautiful...",
            "Believe in yourself...",
            "Every day is a blessing..."
            // Add more quotes as needed
        ];

        carousel.innerHTML = ''; // Clear existing items

        quotes.forEach((quote, index) => {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.textContent = quote;
            carousel.appendChild(item);
        });

        let currentQuoteIndex = 0;
        const carouselItems = document.querySelectorAll('.carousel-item');

        setInterval(() => {
            const nextQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

            carouselItems[currentQuoteIndex].classList.remove('active');
            carouselItems[nextQuoteIndex].classList.add('active');

            currentQuoteIndex = nextQuoteIndex;
        }, 4000); // Change every 4 seconds (adjust as needed)
    };

    const generateNutritionIcons = () => {
        const fruitsIcons = document.getElementById('fruits-icons');
        const vegetablesIcons = document.getElementById('vegetables-icons');
        const proteinsIcons = document.getElementById('proteins-icons');

        // Example icons (replace with actual icons or images)
        fruitsIcons.innerHTML = '<i className="fas fa-apple"></i> <i className="fas fa-orange"></i> <i className="fas fa-banana"></i>';
        vegetablesIcons.innerHTML = '<i className="fas fa-carrot"></i> <i className="fas fa-broccoli"></i> <i className="fas fa-leaf"></i>';
        proteinsIcons.innerHTML = '<i className="fas fa-drumstick-bite"></i> <i className="fas fa-fish"></i> <i className="fas fa-egg"></i>';
    };

    const generateVaccineList = () => {
        const vaccineList = document.getElementById('vaccine-list');
        const vaccines = [
            { name: 'BCG', date: 'January 2023', age: 'At Birth', pdfLink: 'bcg_vaccine.pdf' },
            { name: 'Hepatitis B', date: 'February 2023', age: '1 month', pdfLink: 'hep_b_vaccine.pdf' },
            // Add more vaccines as needed
        ];

        vaccineList.innerHTML = ''; // Clear existing list

        vaccines.forEach(vaccine => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vaccine.name}</td>
                <td>${vaccine.date}</td>
                <td>${vaccine.age}</td>
                <td><a href="${vaccine.pdfLink}" target="_blank">Download</a></td>
            `;
            vaccineList.appendChild(row);
        });
    };


    const showProgressTab = (progressTabId) => {
        const progressTabs = document.querySelectorAll('.progress-tab');
        progressTabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(progressTabId).classList.add('active');
    };
    const generateMotherProfile = () => {
        const motherProfile = document.getElementById('mother-profile');
        const pregnancyDetails = [
            "Experienced a smooth pregnancy journey.",
            "Dealt with morning sickness during the first trimester.",
            "Maintained a healthy diet throughout pregnancy.",
            "Regularly attended prenatal check-ups.",
            "Practiced prenatal yoga for physical and mental well-being."
            // Add more pregnancy details as needed
        ];

        const medicalDetails = [
            "Has no known allergies or medical conditions.",
            "Took prenatal vitamins daily as recommended.",
            "Visited the doctor for routine check-ups.",
            "Followed doctor's advice regarding health precautions.",
            "Kept track of weight gain and health metrics."
            // Add more medical details as needed
        ];

        const otherDetails = [
            "Prepared the nursery room eagerly for the baby's arrival.",
            "Read parenting books to prepare for motherhood.",
            "Attended prenatal classes to learn about childbirth and baby care.",
            "Received support from family and friends throughout pregnancy."
            // Add more other details as needed
        ];

        const randomIndex = (array) => Math.floor(Math.random() * array.length);

        const profileDetails = `
            <p><strong>Pregnancy Details:</strong> ${pregnancyDetails[randomIndex(pregnancyDetails)]}</p>
            <p><strong>Medical Details:</strong> ${medicalDetails[randomIndex(medicalDetails)]}</p>
            <p><strong>Other Details:</strong> ${otherDetails[randomIndex(otherDetails)]}</p>
        `;

        motherProfile.innerHTML = profileDetails;
    };

    return (
        <div className="mommy-dashboard">
            {/* Header */}
            <header>
                <div className="logo">
                    <img src="shwari-unity/src/assets/images/logo.png" alt="Logo" />
                    <h1>Mommy Dashboard</h1>
                </div>
                <div className="sign-out">
                    <button onClick={() => console.log("Sign Out")} >Sign Out <span>👋</span></button>
                </div>
            </header>

            <div className="container">
                {/* Sidebar with navigation */}
                <aside className="sidebar">
                    <ul className="navigation">
                        <li><a href="#" onClick={() => showTab('postpartum-class')}><i className="fas fa-baby"></i> Postpartum Class</a></li>
                        <li><a href="#" onClick={() => showTab('progress-review')}><i className="fas fa-chart-line"></i> Progress Review</a></li>
                        <li><a href="#" onClick={() => showTab('child-nutrition')}><i className="fas fa-carrot"></i> Child Nutrition</a></li>
                        <li><a href="#" onClick={() => showTab('child-development')}><i className="fas fa-child"></i> Child Development</a></li>
                        <li><a href="#" onClick={() => showTab('doctor-page')}><i className="fas fa-user-md"></i> Doctor's Page</a></li>
                        <li><a href="#" onClick={() => showTab('mother-page')}><i className="fas fa-female"></i> Mother's Page</a></li>
                        <li><a href="#" onClick={() => showTab('book-appointment')}><i className="fas fa-calendar-plus"></i> Book Appointment</a></li>
                    </ul>
                </aside>

                {/* Main content area */}
                <main>
                    {/* Postpartum Class tab */}
                    <div id="postpartum-class" className="tab active">
                        <h2>Postpartum Class</h2>
                        <div className="videos">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/your-video-id" frameBorder="0" allowFullScreen title="Postpartum Class"></iframe>
                        </div>
                        <h3>Quotes and Stories</h3>
                        <div className="carousel-container">
                            <div id="quotes-carousel" className="carousel">
                                {/* Carousel items will be dynamically generated here */}
                            </div>
                        </div>
                    </div>

                    {/* Progress Review tab */}
                    <div id="progress-review" className="tab">
                        <h2>Progress Review</h2>
                        <div className="progress-tabs">
                            <button className="progress-tab active" onClick={() => showProgressTab('baby-progress')}>Baby's Progress</button>
                            <button className="progress-tab" onClick={() => showProgressTab('mother-progress')}>Mother's Progress</button>
                        </div>
                        <div id="baby-progress" className="progress-content active">
                            <h3>Baby's Performance</h3>
                            <p>Tasks completed:</p>
                            <div className="task-status">
                                <div className="task">
                                    <span className="task-name">Feeding</span>
                                    <div className="task-bar">
                                        <div className="task-progress" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                {/* Add more tasks as needed */}
                            </div>
                        </div>
                        <div id="mother-progress" className="progress-content">
                            <h3>Mother's Performance</h3>
                            <p>Tasks completed:</p>
                            <div className="task-status">
                                <div className="task">
                                    <span className="task-name">Self-care</span>
                                    <div className="task-bar">
                                        <div className="task-progress" style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                {/* Add more tasks as needed */}
                            </div>
                        </div>
                    </div>

                    {/* Child Nutrition tab */}
                    <div id="child-nutrition" className="tab">
                        <h2>Child Nutrition</h2>
                        <div className="nutrition-icons">
                            <div id="fruits-icons" className="icon-group"></div>
                            <div id="vegetables-icons" className="icon-group"></div>
                            <div id="proteins-icons" className="icon-group"></div>
                        </div>
                    </div>

                    {/* Child Development tab */}
                    <div id="child-development" className="tab">
                        <h2>Child Development Simulator</h2>
                        <iframe src="https://your-child-development-simulator-url.com" width="100%" height="600px" frameBorder="0" title="Child Development Simulator"></iframe>
                    </div>

                    {/* Doctor's Page tab */}
                    <div id="doctor-page" className="tab">
                        <h2>Doctor Consultation</h2>
                        <div className="doctor-chat">
                            <iframe src="https://your-doctor-consultation-url.com" width="100%" height="600px" frameBorder="0" title="Doctor Consultation"></iframe>
                        </div>
                    </div>

                    {/* Mother's Page tab */}
                    <div id="mother-page" className="tab">
                        <h2>Mother's Page</h2>
                        <div id="mother-profile" className="profile-details">
                            {/* Mother's profile details will be dynamically generated here */}
                        </div>
                    </div>

                    {/* Book Appointment tab */}
                    <div id="book-appointment" className="tab">
                        <h2>Book Appointment</h2>
                        <form>
                            <label htmlFor="appointment-date">Select Date:</label>
                            <input type="date" id="appointment-date" name="appointment-date" />
                            <label htmlFor="appointment-time">Select Time:</label>
                            <input type="time" id="appointment-time" name="appointment-time" />
                            <button type="submit">Book Appointment</button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MommyDashboard;
