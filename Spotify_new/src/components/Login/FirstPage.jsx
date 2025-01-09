// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import SignupModal from './Signup'; 
// import LoginModal from './Login';   

// const FirstPage = () => {
//   const [showSignupModal, setShowSignupModal] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);

  
//   const handleOpenSignupModal = () => setShowSignupModal(true);
  
  
//   const handleCloseSignupModal = () => {
//     setShowSignupModal(false);
//     setShowLoginModal(true);  
//   };


//   const handleCloseLoginModal = () => setShowLoginModal(false);

//   return (
//     <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh', backgroundColor: '#1db954' }}>
//       <img
//         src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
//         alt="spotify"
//         style={{ height: '20vh' }}
//       />
//       <Button variant="primary" onClick={handleOpenSignupModal} className="w-50">
//         Connect Spotify
//       </Button>

      
//       <SignupModal 
//         showModal={showSignupModal} 
//         handleClose={handleCloseSignupModal} 
//       />
      
//       <LoginModal 
//         showLoginModal={showLoginModal} 
//         handleCloseLoginModal={handleCloseLoginModal} 
//       />
//     </div>
//   );
// };

// export default FirstPage;

// import React from 'react';
// import styled from 'styled-components'; 

// const FirstPage = () => {
//   return (
//     <Container>
//       <img
//         src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
//         alt="spotify"
//       />
//       <button>Connect Spotify</button>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   background-color: #1db954;
//   gap: 5rem;
  
//   img {
//     height: 20vh;
//   }

//   button {
//     padding: 1rem 5rem;
//     border-radius: 5rem;
//     background-color: black;
//     color: #49f585;
//     border: none;
//     font-size: 1.4rem;
//     cursor: pointer;

//     &:hover {
//       background-color: #1ed760; 
//     }
//   }
// `;

// export default FirstPage;






// import React, { useState } from 'react';
// import styled from 'styled-components';
// import LoginModal from './Login';
// import SignupModal from './Signup';

// const FirstPage = () => {
//   const [showSignupModal, setShowSignupModal] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const handleOpenSignupModal = () => setShowSignupModal(true);
  
//   const handleCloseSignupModal = () => {
//     setShowSignupModal(false);
//     setShowLoginModal(true);  
//   };

//   const handleCloseLoginModal = () => setShowLoginModal(false);

//   return (
//     <Container>
//       <img
//         src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
//         alt="Spotify"
//       />
//       <button onClick={handleOpenSignupModal}>Connect Spotify</button>

//       {/* Render SignupModal */}
//       <SignupModal 
//         showModal={showSignupModal} 
//         handleClose={handleCloseSignupModal} 
//       />
      
//       {/* Render LoginModal */}
//       <LoginModal 
//         showModal={showLoginModal} 
//         handleClose={handleCloseLoginModal} 
//       />
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   background-color: #1db954;
//   gap: 5rem;
  
//   img {
//     height: 20vh;
//   }

//   button {
//     padding: 1rem 5rem;
//     border-radius: 5rem;
//     background-color: black;
//     color: #49f585;
//     border: none;
//     font-size: 1.4rem;
//     cursor: pointer;

//     &:hover {
//       background-color: #1ed760; 
//     }
//   }
// `;

// export default FirstPage;




import React from 'react';
import { useNavigate } from 'react-router-dom'; // Corrected import
import styled from 'styled-components';

const FirstPage = () => {
  const navigate = useNavigate();  

  const handleConnectSpotify = () => {
    navigate('/Signup'); 
  };

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="Spotify"
      />
      <button onClick={handleConnectSpotify}>Connect Spotify</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  
  img {
    height: 20vh;
  }

  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      background-color: #1ed760; 
    }
  }
`;

export default FirstPage;
