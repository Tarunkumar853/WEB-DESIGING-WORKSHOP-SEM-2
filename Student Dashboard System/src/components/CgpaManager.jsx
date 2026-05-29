import { useState } from "react";

const CgpaManager = ({
  semesters,
  setSemesters,
  targetCgpa,
  setTargetCgpa,
  remainingSemesters,
  setRemainingSemesters,
}) => {

  const addSemester = () => {

    setSemesters([
      ...semesters,
      {
        semester: `Semester ${semesters.length + 1}`,
        sgpa: 0,
      },
    ]);
  };

  const deleteSemester = (index) => {

    const updated =
      semesters.filter(
        (_, i) => i !== index
      );

    setSemesters(updated);
  };

  const updateSgpa = (
    index,
    value
  ) => {

    const updated = [...semesters];

    updated[index].sgpa = value;

    setSemesters(updated);
  };

  const calculateCgpa = () => {

    const total =
      semesters.reduce(
        (sum, sem) =>
          sum + Number(sem.sgpa),
        0
      );

    return (
      total /
      semesters.length
    ).toFixed(2);
  };

  const predictRequiredSgpa = () => {

    const currentCgpa =
      Number(calculateCgpa());

    const target =
      Number(targetCgpa);

    const remaining =
      Number(remainingSemesters);

    const completed =
      semesters.length;

    const totalSemesters =
      completed + remaining;

    const required =
      (
        target *
        totalSemesters -
        currentCgpa *
        completed
      ) / remaining;

    return required.toFixed(2);
  };

  const cgpa = calculateCgpa();

  return (

    <div className="space-y-8">

      {/* Current CGPA */}

      <div
        className="
        bg-slate-900/70
        p-6
        rounded-2xl
        border
        border-slate-700
        "
      >

        <h2 className="text-2xl font-bold text-white">
          Current CGPA
        </h2>

        <p className="text-5xl text-cyan-400 font-bold mt-4">
          {cgpa}
        </p>

      </div>

      {/* Semester List */}

      <div
        className="
        bg-slate-900/70
        p-6
        rounded-2xl
        border
        border-slate-700
        "
      >

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl text-white font-bold">
            Semester GPA
          </h2>

          <button
            onClick={addSemester}
            className="
            bg-cyan-400
            text-black
            px-4
            py-2
            rounded-xl
            font-semibold
            "
          >
            Add Semester
          </button>

        </div>

        <div className="space-y-4">

          {semesters.map(
            (sem, index) => (

              <div
                key={index}
                className="
                flex
                gap-4
                items-center
                "
              >

                <p className="text-white w-32">
                  {sem.semester}
                </p>

                <input
                  type="number"
                  step="0.01"
                  value={sem.sgpa}
                  onChange={(e) =>
                    updateSgpa(
                      index,
                      e.target.value
                    )
                  }
                  className="
                  bg-slate-700
                  text-white
                  p-3
                  rounded-xl
                  flex-1
                  "
                />

                <button
                  onClick={() =>
                    deleteSemester(index)
                  }
                  className="
                  bg-red-500
                  px-4
                  py-2
                  rounded-xl
                  text-white
                  "
                >
                  Delete
                </button>

              </div>

            )
          )}

        </div>

      </div>

      {/* Predictor */}

      <div
        className="
        bg-slate-900/70
        p-6
        rounded-2xl
        border
        border-slate-700
        "
      >

        <h2 className="text-2xl text-white font-bold mb-6">
          CGPA Predictor
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="number"
            step="0.01"
            value={targetCgpa}
            onChange={(e) =>
              setTargetCgpa(
                e.target.value
              )
            }
            placeholder="Target CGPA"
            className="
            bg-slate-700
            text-white
            p-3
            rounded-xl
            "
          />

          <input
            type="number"
            value={remainingSemesters}
            onChange={(e) =>
              setRemainingSemesters(
                e.target.value
              )
            }
            placeholder="Remaining Semesters"
            className="
            bg-slate-700
            text-white
            p-3
            rounded-xl
            "
          />

        </div>

        <div className="mt-6">

          <p className="text-white text-lg">
            Required Average SGPA:
          </p>

          <p className="text-4xl font-bold text-green-400 mt-2">
            {predictRequiredSgpa()}
          </p>

        </div>

      </div>

      {/* Academic Status */}

      <div
        className="
        bg-slate-900/70
        p-6
        rounded-2xl
        border
        border-slate-700
        "
      >

        <h2 className="text-2xl text-white font-bold mb-4">
          Academic Status
        </h2>

        {cgpa >= 9 ? (
          <p className="text-green-400 text-xl">
            🏆 Excellent
          </p>
        ) : cgpa >= 8 ? (
          <p className="text-cyan-400 text-xl">
            ⭐ Very Good
          </p>
        ) : cgpa >= 7 ? (
          <p className="text-yellow-400 text-xl">
            👍 Good
          </p>
        ) : (
          <p className="text-red-400 text-xl">
            ⚠ Needs Improvement
          </p>
        )}

      </div>

    </div>
  );
};

export default CgpaManager;