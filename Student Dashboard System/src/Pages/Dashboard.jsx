import StatCard from "../components/StatCard";
import Attendance from "../components/Attendance";

const Dashboard = () => {
  return (
    <div className="mt-8">

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Attendance"
          value="88%"
          color="text-cyan-400"
        />

        <StatCard
          title="Assignments"
          value="12"
          color="text-green-400"
        />

        <StatCard
          title="Pending Tasks"
          value="5"
          color="text-red-400"
        />

        <StatCard
          title="CGPA"
          value="8.5"
          color="text-yellow-400"
        />

      </div>

      {/* Attendance Section */}

      <Attendance />

    </div>
  );
};

export default Dashboard;