import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      <FormikForm />
      <RegistrationForm />
    </div>
  );
}

export default App;
