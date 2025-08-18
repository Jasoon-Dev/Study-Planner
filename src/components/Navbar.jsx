import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`p-4 shadow-lg transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-indigo-700 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link className="text-2xl font-bold cursor-pointer" to='/'>Study Planner</Link>

        {/* Links */}
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/feedback" className="hover:text-gray-200">
            Feedback
          </Link>


          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
