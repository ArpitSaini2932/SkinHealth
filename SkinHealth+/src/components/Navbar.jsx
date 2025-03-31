import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-2xl font-bold">SkinHealth+</h1>
      <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
