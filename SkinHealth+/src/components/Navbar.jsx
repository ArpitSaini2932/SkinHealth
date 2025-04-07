import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/analysis" className="hover:underline">Skin Analysis</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
