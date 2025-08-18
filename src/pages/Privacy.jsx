function Privacy({ darkMode }) {
  return (
    <div
      className={`max-w-4xl mx-auto rounded-2xl shadow-xl p-8 mt-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gray-800 text-gray-100"
          : "bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 text-gray-800"
      }`}
    >
      <h1 className={`text-3xl font-extrabold mb-6 ${darkMode ? "text-green-300" : "text-emerald-800"}`}>
        Privacy Policy
      </h1>

      <p className="mb-4 leading-relaxed">
        Your privacy is very important to us. The{" "}
        <strong className={darkMode ? "text-green-200" : "text-emerald-700"}>Student Planner</strong> is designed
        with simplicity and security in mind. We do not require you to create an
        account, and we never share your data with third parties.
      </p>

      <h2 className={`text-xl font-semibold mt-6 mb-3 ${darkMode ? "text-green-300" : "text-emerald-700"}`}>
        🔒 How Your Data is Stored
      </h2>
      <p className="mb-4 leading-relaxed">
        All tasks, schedules, and progress information are stored{" "}
        <strong>locally</strong> in your browser using <em>localStorage</em>.
        Only you have access to your data.
      </p>

      <h2 className={`text-xl font-semibold mt-6 mb-3 ${darkMode ? "text-green-300" : "text-emerald-700"}`}>
        🛡️ Our Commitment
      </h2>
      <p className="mb-6 leading-relaxed">
        We are committed to keeping the Student Planner safe, secure, and free
        from unnecessary tracking. No personal data is collected or sold.
      </p>

      <div className={`p-4 rounded-xl shadow-md text-center ${darkMode ? "bg-green-700 text-gray-100" : "bg-emerald-600 text-white"}`}>
        <h3 className="text-lg font-semibold mb-2">Your Data, Your Control</h3>
        <p>You can clear all saved tasks at any time by resetting your browser’s local storage.</p>
      </div>
    </div>
  );
}

export default Privacy;
