
const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>        {/* Displaying the name */}
        <p>Age: {props.age}</p>      {/* Displaying the age */}
        <p>Bio: {props.bio}</p>      {/* Displaying the bio */}
      </div>
    );
  };
  
  export default UserProfile;   // Export the component so it can be imported into App.jsx
  