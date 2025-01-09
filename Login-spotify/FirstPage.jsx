import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignupModal from './Signup'; 
import LoginModal from './Login';   

const FirstPage = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  
  const handleOpenSignupModal = () => setShowSignupModal(true);
  
  
  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);  
  };


  const handleCloseLoginModal = () => setShowLoginModal(false);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', backgroundColor: '#1db954' }}>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
        style={{ height: '20vh' }}
      />
      <Button variant="primary" onClick={handleOpenSignupModal} className="w-50">
        Connect Spotify
      </Button>

      
      <SignupModal 
        showModal={showSignupModal} 
        handleClose={handleCloseSignupModal} 
      />
      
      <LoginModal 
        showLoginModal={showLoginModal} 
        handleCloseLoginModal={handleCloseLoginModal} 
      />
    </div>
  );
};

export default FirstPage;
