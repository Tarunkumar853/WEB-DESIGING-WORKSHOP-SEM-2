import { useState } from "react";

const AssignmentTracker = ({ tasks, setTasks}) => {

  const [task, setTask] = useState("");

  const addTask = () => {

    if (task === "") return;

    setTasks([...tasks, task]);

    setTask("");
  };

  const deleteTask = (index) => {

    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };
  

  return (
    <div
      className="
      bg-slate-900/70 backdrop-blur-lg
      p-6
      rounded-2xl
      mt-8
      shadow-lg
      border
      border-slate-700
      "
    >

      <h2 className="text-2xl font-bold text-white mb-6">
        Assignment Tracker
      </h2>

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Enter assignment..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="
          flex-1
          bg-slate-700
          text-white
          px-4
          py-3
          rounded-xl
          outline-none
          "
        />

        <button
          onClick={addTask}
          className="
          bg-cyan-400 hover:bg-cyan-300 hover:scale-105
          text-black
          px-6
          rounded-xl
          font-semibold
          hover:bg-cyan-300
          transition
          duration-300
          "
        >
          Add
        </button>

      </div>

      <div className="space-y-4">

        {tasks.map((task, index) => (

          <div
            key={index}
            className="
            flex
            justify-between
            items-center
            bg-slate-700
            p-4
            rounded-xl
            "
          >

            <p className="text-white">
              {task}
            </p>

            <button
              onClick={() => deleteTask(index)}
              className="
              bg-red-500
              px-4
              py-1
              rounded-lg
              text-white
              hover:bg-red-400
              transition
              duration-300
              "
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AssignmentTracker;