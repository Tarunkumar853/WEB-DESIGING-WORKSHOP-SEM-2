const Attendance = () => {
  const subjects = [
    {
      name: "Mathematics",
      attendance: 85,
    },
    {
      name: "Physics",
      attendance: 78,
    },
    {
      name: "Java",
      attendance: 92,
    },
    {
      name: "DBMS",
      attendance: 88,
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-2xl mt-8 shadow-lg border border-slate-700">

      <h2 className="text-2xl font-bold text-white mb-6">
        Attendance Progress
      </h2>

      <div className="space-y-6">

        {subjects.map((subject, index) => (
          <div key={index}>

            <div className="flex justify-between mb-2">
              <span className="text-gray-300">
                {subject.name}
              </span>

              <span className="text-cyan-400 font-semibold">
                {subject.attendance}%
              </span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-4">

              <div
                className="bg-cyan-400 h-4 rounded-full"
                style={{
                  width: `${subject.attendance}%`,
                }}
              ></div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Attendance;