// src/components/Calendar.jsx
import { useState } from "react";

function Calendar({ tasks, selectedDate, setSelectedDate }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const years = Array.from({ length: 31 }, (_, i) => 2000 + i);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const formatDate = (year, month, day) =>
    `${year}-${String(month + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

  const taskCount = (day) =>
    tasks.filter((t) => t.dueDate === formatDate(currentYear, currentMonth, day)).length;

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-2xl shadow-md w-full max-w-lg">
      {/* Header */}
      <div className="flex justify-center items-center gap-3 mb-3">
        <select
          value={currentMonth}
          onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
          className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-lg font-semibold bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {months.map((m,i) => (
            <option key={m} value={i}>{m}</option>
          ))}
        </select>

        <select
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value))}
          className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-lg font-semibold bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-600 dark:text-gray-300">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}

        {days.map((day) => {
          const dateStr = formatDate(currentYear, currentMonth, day);
          const count = taskCount(day);
          const isToday =
            dateStr === formatDate(today.getFullYear(), today.getMonth(), today.getDate());

          // Determine button colors
          let bgClass = "bg-gray-100 dark:bg-gray-700";
          let textClass = "text-gray-900 dark:text-gray-100";

          if (selectedDate === dateStr) {
            bgClass = "bg-indigo-500";
            textClass = "text-white";
          } else if (count > 0) {
            bgClass = "bg-yellow-200 dark:bg-yellow-600";
            textClass = "text-gray-900 dark:text-gray-100";
          }

          return (
            <button
              key={day}
              onClick={() =>
                setSelectedDate((prev) => (prev === dateStr ? "" : dateStr))
              }
              className={`relative p-2 rounded-lg transition-colors ${bgClass} ${textClass} ${isToday ? "border-2 border-blue-400 dark:border-blue-300" : ""}`}
            >
              <span className="text-sm font-medium">{day}</span>
              {count > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Task list */}
      {selectedDate && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Tasks on {selectedDate}:
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
            {tasks.filter((t) => t.dueDate === selectedDate).length > 0 ? (
              tasks
                .filter((t) => t.dueDate === selectedDate)
                .map((t) => <li key={t.id}>{t.text}</li>)
            ) : (
              <li className="text-gray-500 dark:text-gray-400">No tasks</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Calendar;
