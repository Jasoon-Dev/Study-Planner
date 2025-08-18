// src/components/TaskList.jsx
function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
  return (
    <div className="w-full max-w-5xl mt-6 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-md p-4">
      <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded-lg border
                ${
                  task.completed
                    ? "bg-green-100 dark:bg-green-700 line-through text-gray-700 dark:text-gray-200"
                    : "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                }`}
            >
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {task.subject} | {task.priority} | Due: {task.dueDate}
                </p>
                {task.notes && (
                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-200">{task.notes}</p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                >
                  {task.completed ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
