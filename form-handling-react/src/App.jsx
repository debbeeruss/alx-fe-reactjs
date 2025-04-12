import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormikForm ;


import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold text-blue-700">User Registration</h1>
        <nav className="my-4">
          <Link to="/controlled" className="mr-4 text-blue-500">Controlled Form</Link>
          <Link to="/formik" className="text-green-500">Formik Form</Link>
        </nav>

        <Routes>
          <Route path="/controlled" element={<RegistrationForm />} />
          <Route path="/formik" element={<formikForm />} />
        </Routes>
      </div>
    </Router>
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
  )
}

export default App
