import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <h1 className="text-5xl font-bold text-white mb-4 text-center">
        Welcome to SkinHealth+
      </h1>
      <p className="text-xl text-white mb-6 text-center max-w-lg">
        Your AI-powered dermatology assistant to help you with skin care solutions
      </p>
      <Link 
        to="/signup" 
        className="px-8 py-3 bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
