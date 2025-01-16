
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const user = useSelector((state) => state.auth.user); 


  return (
    <div>
      {loggedInUser ? (
        <div>
          <h2>Welcome, {loggedInUser.name}!</h2>
          <p>Email: {user.email}</p>
          <p>Password: {loggedInUser.password}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
