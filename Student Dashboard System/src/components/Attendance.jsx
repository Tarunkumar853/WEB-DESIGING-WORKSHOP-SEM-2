import { useState } from "react";

import { motion } from "framer-motion";

const Attendance = ({
  subjects,
  setSubjects,
}) => {

  const handleChange = (
    index,
    field,
    value
  ) => {

    const updatedSubjects = [...subjects];

    updatedSubjects[index][field] = Number(value);

    setSubjects(updatedSubjects);
  };

  const calculateAttendance = (
    attended,
    total
  ) => {

    if (total === 0) return 0;

    return Math.round(
      (attended / total) * 100
    );
  };

  const getColor = (percentage) => {

    if (percentage >= 75)
      return "bg-green-500";

    if (percentage >= 60)
      return "bg-yellow-500";

    return "bg-red-500";
  };

  return (
    <motion.div

      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.5 }}

      className="
      bg-slate-900/70
      backdrop-blur-lg
      p-6
      rounded-2xl
      mt-8
      border
      border-slate-700
      shadow-xl
      "
    >

      <h2 className="text-3xl text-white font-bold mb-8">
        Attendance Manager
      </h2>

      <div className="space-y-8">

        {subjects.map((subject, index) => {

          const percentage =
            calculateAttendance(
              subject.attended,
              subject.total
            );

          return (

            <div
              key={index}
              className="
              bg-slate-800
              p-5
              rounded-2xl
              "
            >

              <div className="flex justify-between items-center mb-4">

                <h3 className="text-xl text-white font-semibold">
                  {subject.name}
                </h3>

                <span className="text-cyan-400 font-bold text-lg">
                  {percentage}%
                </span>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

                <input
                  type="number"
                  placeholder="Attended Classes"
                  value={subject.attended}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "attended",
                      e.target.value
                    )
                  }
                  className="
                  bg-slate-700
                  text-white
                  p-3
                  rounded-xl
                  outline-none
                  "
                />

                <input
                  type="number"
                  placeholder="Total Classes"
                  value={subject.total}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "total",
                      e.target.value
                    )
                  }
                  className="
                  bg-slate-700
                  text-white
                  p-3
                  rounded-xl
                  outline-none
                  "
                />

              </div>

              <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">

                <div
                  className={`
                  h-4
                  rounded-full
                  transition-all
                  duration-500
                  ${getColor(percentage)}
                  `}
                  style={{
                    width: `${percentage}%`,
                  }}
                ></div>

              </div>

              <div className="mt-4">

                {percentage < 75 ? (

                  <p className="text-red-400 font-medium">
                    ⚠ Attendance shortage
                  </p>

                ) : (

                  <p className="text-green-400 font-medium">
                    ✔ Good attendance
                  </p>

                )}

              </div>

            </div>
          );
        })}

      </div>

    </motion.div>
  );
};

export default Attendance;