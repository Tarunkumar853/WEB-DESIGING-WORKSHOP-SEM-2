import AssignmentTracker from "../components/AssignmentTracker";

const Assignments = ({
  tasks,
  setTasks,
}) => {
  return (
    <div>
      <h1 className="text-3xl text-white font-bold mb-6">
        Assignments
      </h1>

      <AssignmentTracker
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default Assignments;