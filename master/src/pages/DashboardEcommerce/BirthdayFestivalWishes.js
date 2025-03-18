import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import confetti from 'canvas-confetti';
import './BirthdayFestivalWishes.css';

// Festival data with dates
const festivals = [
  { name: "Diwali", date: "2025-11-10", message: "Wishing you a bright and prosperous Diwali! May this festival of lights bring joy and success to you and your family." },
  { name: "Holi", date: "2025-03-16", message: "Happy Holi! May your life be filled with vibrant colors of joy and happiness." },
  { name: "Ganesh Chaturthi", date: "2025-09-02", message: "Happy Ganesh Chaturthi! May Lord Ganesha bring you wisdom, prosperity and happiness." },
  { name: "Pongal", date: "2025-01-15", message: "Happy Pongal! Wishing you abundant harvests and prosperity." },
  { name: "Republic Day", date: "2025-01-26", message: "Happy Republic Day! Let's celebrate the spirit of our great nation." }
];

const BirthdayFestivalWishes = ({ user }) => {
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);
  const [showFestivalWish, setShowFestivalWish] = useState(false);
  const [currentFestival, setCurrentFestival] = useState(null);

  useEffect(() => {
    if (user) {
      checkForBirthday();
      checkForFestival();
    }
  }, [user]);

  const checkForBirthday = () => {
    if (!user || !user.dob) return;

    const today = new Date();
    const dob = new Date(user.dob);
    
    // Check if today is the user's birthday (same month and day)
    if (today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate()) {
      setShowBirthdayWish(true);
      triggerConfetti();
    }
  };

  const checkForFestival = () => {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    
    const todaysFestival = festivals.find(festival => festival.date === formattedToday);
    
    if (todaysFestival) {
      setCurrentFestival(todaysFestival);
      setShowFestivalWish(true);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCloseBirthdayWish = () => setShowBirthdayWish(false);
  const handleCloseFestivalWish = () => setShowFestivalWish(false);

  return (
    <>
      {/* Birthday Wishes Modal */}
      <Modal 
        show={showBirthdayWish} 
        onHide={handleCloseBirthdayWish}
        centered
        className="birthday-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">🎂 Happy Birthday! 🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="birthday-content">
            <div className="birthday-cake mb-4">
              🎂
            </div>
            <h2>Happy Birthday, {user?.name}!</h2>
            <p className="birthday-message">
              Wishing you a fantastic day filled with joy and celebrations. 
              May the year ahead bring you success, happiness, and prosperity!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={() => {
            handleCloseBirthdayWish();
            triggerConfetti();
          }}>
            Thank You!
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Festival Wishes Modal */}
      <Modal 
        show={showFestivalWish} 
        onHide={handleCloseFestivalWish}
        centered
        className="festival-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">✨ {currentFestival?.name} Wishes ✨</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="festival-content">
            <div className="festival-icon mb-4">
              {currentFestival?.name === "Diwali" ? "🪔" : 
               currentFestival?.name === "Holi" ? "🎨" : 
               currentFestival?.name === "Ganesh Chaturthi" ? "🙏" : 
               currentFestival?.name === "Republic Day" ? "🇮🇳" : "🎊"}
            </div>
            <h3>Dear {user?.name},</h3>
            <p className="festival-message">
              {currentFestival?.message}
            </p>
            <p className="festival-regards mt-3">
              - Shri Someshwar Sahakari Karkhane
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleCloseFestivalWish}>
            Thank You!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BirthdayFestivalWishes;