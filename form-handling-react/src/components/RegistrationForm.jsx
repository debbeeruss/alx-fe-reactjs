import { useState } from "react";

function RegistrationForm() {
  // Separate state variables for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Form validation function
  const validate = () => {
    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully:", { username, email, password });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={username} // <-- Explicitly referencing individual state
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email} // <-- Explicitly referencing individual state
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password} // <-- Explicitly referencing individual state
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
