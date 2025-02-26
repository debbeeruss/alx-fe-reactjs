import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import the UserContext

function UserDetails() {
  // Use the useContext hook to get the value from UserContext
  const userData = useContext(UserContext);

    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;