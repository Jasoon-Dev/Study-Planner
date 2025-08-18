function Terms({ darkMode }) {
  return (
    <div
      className={`max-w-4xl mx-auto rounded-2xl shadow-xl p-8 mt-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gray-800 text-gray-100"
          : "bg-gradient-to-r from-yellow-100 via-orange-100 to-amber-100 text-gray-800"
      }`}
    >
      <h1 className={`text-3xl font-extrabold mb-6 ${darkMode ? "text-yellow-300" : "text-amber-800"}`}>
        Terms of Use
      </h1>

      <p className="mb-4 leading-relaxed">
        By using the <strong className={darkMode ? "text-yellow-200" : "text-amber-700"}>Student Planner</strong>,
        you agree to use this tool responsibly and only for educational purposes.
        This application is provided <em>as-is</em>, without any warranties.
      </p>

      <h2 className={`text-xl font-semibold mt-6 mb-3 ${darkMode ? "text-yellow-300" : "text-amber-700"}`}>
        ✅ Acceptable Use
      </h2>
      <ul className="list-disc list-inside space-y-2 leading-relaxed">
        <li>Use the planner for study, school, or personal task management.</li>
        <li>Do not misuse the platform to store harmful or illegal content.</li>
        <li>Respect the simplicity of the tool and its intended purpose.</li>
      </ul>

      <h2 className={`text-xl font-semibold mt-6 mb-3 ${darkMode ? "text-yellow-300" : "text-amber-700"}`}>
        ⚠️ Limitations
      </h2>
      <p className="mb-6 leading-relaxed">
        We do not guarantee that your data will be available indefinitely.
        Please back up any important tasks manually.
      </p>

      <div className={`p-4 rounded-xl shadow-md text-center ${darkMode ? "bg-yellow-700 text-gray-100" : "bg-amber-600 text-white"}`}>
        <h3 className="text-lg font-semibold mb-2">Reminder</h3>
        <p>Use this planner as a supportive tool — not as your only record of assignments or exams.</p>
      </div>
    </div>
  );
}

export default Terms;
