import StatCard from "../components/StatCard";

const Dashboard = ({
  stats,
  subjects,
  averageAttendance,
  tasks,
  notes,
  cgpa,
  classes,
  exams,
  targetCgpa,
}) => {

  const today = new Date().toLocaleDateString(
  "en-US",
  {
    weekday: "long",
  }
  );

  const todaysClasses =
  classes.filter(
    (cls) => cls.day === today
  );

  const upcomingExam =
  exams
    .filter(
      (exam) =>
        new Date(exam.date) >=
        new Date()
    )
    .sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    )[0];  

  return (
  <div className="mt-8">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <StatCard
        title="Attendance"
        value={averageAttendance}
        color="text-cyan-400"
        icon="📊"
      />

      <StatCard
        title="Tasks"
        value={tasks.length}
        color="text-green-400"
        icon="✅"
      />

      <StatCard
        title="Subjects"
        value={subjects.length}
        color="text-blue-400"
        icon="📚"
      />

      <StatCard
        title="CGPA"
        value={cgpa}
        color="text-yellow-400"
        icon="🎓"
      />

    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-700">

        <h2 className="text-white text-xl font-bold mb-4">
          🎯 CGPA Goal
        </h2>

        <p className="text-white mb-3">
          Current: {cgpa}
        </p>

        <div className="w-full bg-slate-700 h-4 rounded-full">

          <div
            className="bg-green-500 h-4 rounded-full"
            style={{
              width: `${Math.min(
                (Number(cgpa) / Number(targetCgpa)) * 100,
                100
              )}%`,
            }}
          />

        </div>

      </div>

      <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-700">

        <h2 className="text-white text-xl font-bold mb-4">
          📝 Notes
        </h2>

        <p className="text-4xl font-bold text-purple-400">
          {notes.length}
        </p>

        <p className="text-gray-400 mt-2">
          Saved Notes
        </p>

        <p className="text-gray-300 mt-3 truncate">
          {notes[0] || "No notes available"}
        </p>

      </div>

    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-700">

        <h2 className="text-white text-xl font-bold mb-4">
          📅 Today's Classes
        </h2>

        <p className="text-5xl font-bold text-cyan-400">
          {todaysClasses.length}
        </p>

        <p className="text-gray-400 mt-2">
          {today}
        </p>

      </div>

      <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-700">

        <h2 className="text-white text-xl font-bold mb-4">
          📝 Upcoming Exam
        </h2>

        {upcomingExam ? (
          <>
            <p className="text-2xl text-green-400 font-bold">
              {upcomingExam.subject}
            </p>

            <p className="text-gray-400 mt-2">
              {Math.ceil(
                (
                  new Date(upcomingExam.date) -
                  new Date()
                ) /
                (1000 * 60 * 60 * 24)
              )} Days Left
            </p>
          </>
        ) : (
          <p className="text-gray-400">
            No upcoming exams
          </p>
        )}

      </div>

    </div>

    <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-700 mt-8">

      <h2 className="text-white text-xl font-bold mb-4">
        ⚠ Attendance Alerts
      </h2>

      {subjects.map((subject) => {

        const percentage = Math.round(
          (subject.attended / subject.total) * 100
        );

        if (percentage >= 75) return null;

        return (
          <p
            key={subject.name}
            className="text-red-400 mb-2"
          >
            {subject.name} — {percentage}%
          </p>
        );
      })}

    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

      <div className="bg-slate-900/70 p-6 rounded-2xl">

        <h2 className="text-white text-xl font-bold mb-4">
          Recent Tasks
        </h2>

        {tasks.slice(0, 3).map((task, index) => (
          <p
            key={index}
            className="text-gray-300 mb-2"
          >
            • {task}
          </p>
        ))}

      </div>

      <div className="bg-slate-900/70 p-6 rounded-2xl">

        <h2 className="text-white text-xl font-bold mb-4">
          Recent Notes
        </h2>

        {notes.slice(0, 3).map((note, index) => (
          <p
            key={index}
            className="text-gray-300 mb-2"
          >
            • {note}
          </p>
        ))}

      </div>

    </div>

  </div>
);
}
export default Dashboard;