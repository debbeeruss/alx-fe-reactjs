import WelcomeMessage from './components/WelcomeMessage';
import React from 'react';
import Header from './Header';          
import MainContent from './MainContent'; 
import Footer from './Footer';          
import UserProfile from './components/UserProfile';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
            <WelcomeMessage /> {/* Ensure the component is here */}
            <Header />         {/* Include the Header component */}
            <MainContent />    {/* Include the MainContent component */}
            <Footer />         {/* Include the Footer component */}
            <h1>User Information</h1>
      {/* Use UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Avid traveler and foodie" 
      />
        </div>
    );
  }
  
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  

export default App
