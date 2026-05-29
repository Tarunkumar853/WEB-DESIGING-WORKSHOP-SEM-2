import { useState } from "react";

const TimetableManager = ({
  classes,
  setClasses,
  exams,
  setExams,
}) => {

  const [newClass, setNewClass] = useState({
    day: "",
    subject: "",
    start: "",
    end: "",
    room: "",
  });

  const [newExam, setNewExam] = useState({
    subject: "",
    date: "",
    time: "",
    venue: "",
  });

  const addClass = () => {

    if (
      !newClass.day ||
      !newClass.subject
    )
      return;

    setClasses([
      ...classes,
      newClass,
    ]);

    setNewClass({
      day: "",
      subject: "",
      start: "",
      end: "",
      room: "",
    });
  };

  const deleteClass = (index) => {

    setClasses(
      classes.filter(
        (_, i) => i !== index
      )
    );
  };

  const addExam = () => {

    if (
      !newExam.subject ||
      !newExam.date
    )
      return;

    setExams([
      ...exams,
      newExam,
    ]);

    setNewExam({
      subject: "",
      date: "",
      time: "",
      venue: "",
    });
  };

  const deleteExam = (index) => {

    setExams(
      exams.filter(
        (_, i) => i !== index
      )
    );
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="space-y-8">

      <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-700">

        <h2 className="text-2xl text-white font-bold mb-6">
          Weekly Timetable
        </h2>

        <div className="grid md:grid-cols-5 gap-4 mb-4">

          <select
            value={newClass.day}
            onChange={(e) =>
              setNewClass({
                ...newClass,
                day: e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          >
            <option value="">
              Day
            </option>

            {days.map((day) => (
              <option
                key={day}
                value={day}
              >
                {day}
              </option>
            ))}
          </select>

          <input
            placeholder="Subject"
            value={newClass.subject}
            onChange={(e) =>
              setNewClass({
                ...newClass,
                subject:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

          <input
            type="time"
            value={newClass.start}
            onChange={(e) =>
              setNewClass({
                ...newClass,
                start:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

          <input
            type="time"
            value={newClass.end}
            onChange={(e) =>
              setNewClass({
                ...newClass,
                end:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

          <input
            placeholder="Room"
            value={newClass.room}
            onChange={(e) =>
              setNewClass({
                ...newClass,
                room:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

        </div>

        <button
          onClick={addClass}
          className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold"
        >
          Add Class
        </button>

        <div className="mt-8 space-y-4">

          {classes.map(
            (cls, index) => (

              <div
                key={index}
                className="bg-slate-800 p-4 rounded-xl flex justify-between items-center"
              >

                <div className="text-white">

                  <p>
                    {cls.day}
                  </p>

                  <p>
                    {cls.subject}
                  </p>

                  <p>
                    {cls.start} - {cls.end}
                  </p>

                  <p>
                    Room: {cls.room}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteClass(index)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            )
          )}

        </div>

      </div>

      <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-700">

        <h2 className="text-2xl text-white font-bold mb-6">
          Exam Timetable
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mb-4">

          <input
            placeholder="Subject"
            value={newExam.subject}
            onChange={(e) =>
              setNewExam({
                ...newExam,
                subject:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

          <input
            type="date"
            value={newExam.date}
            onChange={(e) =>
              setNewExam({
                ...newExam,
                date:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

          <input
            type="time"
            value={newExam.time}
            onChange={(e) =>
              setNewExam({
                ...newExam,
                time:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

          <input
            placeholder="Venue"
            value={newExam.venue}
            onChange={(e) =>
              setNewExam({
                ...newExam,
                venue:
                  e.target.value,
              })
            }
            className="bg-slate-700 text-white p-3 rounded-xl"
          />

        </div>

        <button
          onClick={addExam}
          className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold"
        >
          Add Exam
        </button>

        <div className="mt-8 space-y-4">

          {exams.map(
            (exam, index) => (

              <div
                key={index}
                className="bg-slate-800 p-4 rounded-xl flex justify-between items-center"
              >

                <div className="text-white">

                  <p>
                    {exam.subject}
                  </p>

                  <p>
                    {exam.date}
                  </p>

                  <p>
                    {exam.time}
                  </p>

                  <p>
                    {exam.venue}
                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteExam(index)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
};

export default TimetableManager;