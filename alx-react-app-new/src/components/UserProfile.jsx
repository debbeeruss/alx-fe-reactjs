
const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
        <h2 style={{color: 'blue', fontSize: '24px'}}>{props.name}</h2>        {/* Displaying the name */}
        <p>Age: <span style={{ fontWeight: 'bold', color: 'green'}}>{props.age}</span></p>      {/* Displaying the age */}
        <p>Bio: {props.bio}</p>      {/* Displaying the bio */}
      </div>
    );
  };
  
  export default UserProfile;   // Export the component so it can be imported into App.jsx
  