import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Calendar from "./components/Calendar";
import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Feedback from "./pages/Feedback";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";


function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  // Load tasks from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Task actions
  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Progress %
  const completed = tasks.filter((t) => t.completed).length;
  const progress = tasks.length ? (completed / tasks.length) * 100 : 0;

  // Filter by date
  const displayedTasks = selectedDate
    ? tasks.filter((t) => t.dueDate === selectedDate)
    : tasks;

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-500 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-indigo-400 to-purple-500 text-gray-900"
        }`}
      >
        {/* Navbar with toggle */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main */}
        <main className="flex-1 p-6 flex flex-col items-center">
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-4xl font-bold mb-6 text-white">
                    📚 Study Planner
                  </h1>
                  <ProgressBar progress={progress} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                    <TaskForm addTask={addTask} />
                    <Calendar
                      tasks={tasks}
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  </div>
                  <TaskList
                    tasks={displayedTasks}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                  />
                </>
              }
            />
            {/* Other Pages */}
            <Route path="/feedback" element={<Feedback darkMode={darkMode} />} />
            <Route path="/privacy" element={<Privacy darkMode={darkMode} />} />
            <Route path="/terms" element={<Terms darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </Router>

    
  );
}

export default App;
