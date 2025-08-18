// src/components/ProgressBar.jsx
function ProgressBar({ progress }) {
  return (
    <div className="w-full max-w-5xl mb-6">
      <div className="bg-gray-300 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-right text-sm text-gray-200 mt-1">
        {Math.round(progress)}% Completed
      </p>
    </div>
  );
}

export default ProgressBar;
