function About({ darkMode }) {
  return (
    <div
      className={`max-w-4xl mx-auto rounded-2xl shadow-xl p-8 mt-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gray-800 text-gray-100"
          : "bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 text-gray-800"
      }`}
    >
      <h1 className={`text-3xl font-extrabold mb-6 ${darkMode ? "text-indigo-300" : "text-indigo-800"}`}>
        About Student Planner
      </h1>

      <p className="mb-4 leading-relaxed">
        The <strong className={darkMode ? "text-indigo-200" : "text-indigo-700"}>Student Planner</strong> is a free,
        all-in-one productivity tool created to help students manage their academic
        tasks, deadlines, and study schedules with ease.
      </p>

      <h2 className={`text-xl font-semibold mt-6 mb-3 ${darkMode ? "text-purple-300" : "text-purple-700"}`}>
        🌟 Key Features
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li><span className={darkMode ? "text-indigo-200" : "text-indigo-700"}>Task Tracking:</span> Add, complete, and manage assignments.</li>
        <li><span className={darkMode ? "text-indigo-200" : "text-indigo-700"}>Calendar Integration:</span> Organize tasks by date.</li>
        <li><span className={darkMode ? "text-indigo-200" : "text-indigo-700"}>Progress Monitoring:</span> Track your accomplishments.</li>
        <li><span className={darkMode ? "text-indigo-200" : "text-indigo-700"}>User-Friendly Design:</span> Simple, colorful interface.</li>
      </ul>

      <h2 className={`text-xl font-semibold mt-6 mb-3 ${darkMode ? "text-purple-300" : "text-purple-700"}`}>
        🎯 Our Mission
      </h2>
      <p className="leading-relaxed mb-4">
        Our mission is to empower students to take control of their time, reduce
        academic stress, and maximize productivity.
      </p>

      <div className={`p-4 rounded-xl shadow-md text-center ${darkMode ? "bg-indigo-700 text-gray-100" : "bg-indigo-600 text-white"}`}>
        <h3 className="text-lg font-semibold mb-2">💡 Fun Fact</h3>
        <p>Students who plan effectively can improve performance by up to <span className="font-bold">20%</span>!</p>
      </div>
    </div>
  );
}

export default About;
