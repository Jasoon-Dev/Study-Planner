import { Link } from "react-router-dom";

function Footer({ darkMode }) {
  return (
    <footer
      className={`p-4 mt-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-white" : "bg-indigo-800 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Student Planner. All rights reserved.
        </p>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-300">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
