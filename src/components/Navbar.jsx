import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`p-2 sm:p-4 shadow-lg transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-indigo-700 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <Link className="text-lg sm:text-2xl font-bold cursor-pointer" to="/">
          Study Planner
        </Link>

        {/* Links + Dark Mode Toggle */}
        <div className="flex items-center flex-wrap gap-1 sm:gap-6">
          <Link to="/" className="hover:text-gray-200 text-sm sm:text-base">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 text-sm sm:text-base">
            About
          </Link>
          <Link to="/feedback" className="hover:text-gray-200 text-sm sm:text-base">
            Feedback
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-0 sm:ml-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 text-xs sm:text-sm"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
