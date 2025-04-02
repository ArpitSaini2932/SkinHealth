import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login")
    setMessage("Signup successful (Mock Response)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-2 border rounded" type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="w-full p-2 border rounded" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">Signup</button>
        </form>
        {message && <p className="text-green-500 mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
};
export default Signup;
