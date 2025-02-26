// src/components/UserProfile.jsx

import React, { useContext } from 'react';   // Import React and useContext hook
import UserContext from '../UserContext';     // Import UserContext

function UserProfile() {
  // Access the context data using useContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
