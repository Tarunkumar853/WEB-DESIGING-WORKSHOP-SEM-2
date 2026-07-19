import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./Pages/Dashboard";
import Assignments from "./Pages/Assignments";
import NotesPage from "./Pages/NotesPage";
import Settings from "./Pages/Settings";
import AttendancePage from "./Pages/AttendancePage";
import CgpaPage from "./Pages/CgpaPage";
import TimetablePage from "./Pages/TimetablePage";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [page, setPage] = useState("dashboard");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
    );
  },[tasks]);

  const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("notes");

      if (savedNotes) {
        return JSON.parse(savedNotes);
      }

      return [
        "OS Exam Friday",
        "React Hooks",
      ];
    });

    useEffect(() => {
        localStorage.setItem(
          "notes",
          JSON.stringify(notes)
        );
      }, [notes]);

  const [semesters, setSemesters] = useState(() => {
    const saved = localStorage.getItem("semesters");

    return saved
    ? JSON.parse(saved)
    : [
        {
          semester: "Semester 1",
          sgpa: 8.2,
        },
      ];
  });

  const [targetCgpa, setTargetCgpa] = useState(() => {
    return localStorage.getItem("targetCgpa") || "9.0";
  });

  const [remainingSemesters, setRemainingSemesters] = useState(() => {
    return localStorage.getItem("remainingSemesters") || "4";
  });

  useEffect(() => {
    localStorage.setItem(
     "semesters",
     JSON.stringify(semesters)
    );
  }, [semesters]);

  useEffect(() => {
    localStorage.setItem(
      "targetCgpa",
      targetCgpa
    );
  }, [targetCgpa]);

  useEffect(() => {
    localStorage.setItem(
      "remainingSemesters",
      remainingSemesters
    );
  }, [remainingSemesters]);

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

  const [classes, setClasses] = useState(() => {
    const saved = localStorage.getItem("classes");

    return saved
      ? JSON.parse(saved)
      : [
          {
            day: "Monday",
            subject: "DSA",
            start: "09:00",
            end: "10:00",
            room: "A101",
          },
        ];
  });

  const [exams, setExams] = useState(() => {
    const saved = localStorage.getItem("exams");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "classes",
      JSON.stringify(classes)
    );
  }, [classes]);

  useEffect(() => {
    localStorage.setItem(
      "exams",
      JSON.stringify(exams)
    );
  }, [exams]);

  const renderPage = () => {

    switch (page) {

      case "assignments":
        return (
          <Assignments
            tasks={tasks}
            setTasks={setTasks}
          />
        );

      case "notes":
        return <NotesPage
                notes={notes}
                setNotes={setNotes}
              />;

      case "settings":
        return <Settings />;

      case "attendance":
        return (
          <AttendancePage
          subjects={subjects}
          setSubjects={setSubjects}
          />
        );  
      
      case "cgpa":
        return (
          <CgpaPage
            semesters={semesters}
            setSemesters={setSemesters}
            targetCgpa={targetCgpa}
            setTargetCgpa={setTargetCgpa}
            remainingSemesters={remainingSemesters}
            setRemainingSemesters={setRemainingSemesters}
          />
        );

      case "timetable":
        return (
          <TimetablePage
            classes={classes}
            setClasses={setClasses}
            exams={exams}
            setExams={setExams}
          />
        );  

      default:
        return <Dashboard
                  stats={stats}
                  subjects={subjects}
                  averageAttendance={calculateAverageAttendance()}
                  tasks={tasks}
                  notes={notes}
                  cgpa={calculateCgpa()}
                  classes={classes}
                  exams={exams}
                  targetCgpa={targetCgpa}
                />;
    }
  };

  const [stats, setStats] = useState({
    tasks: "24",
    studyHours: "6.5h",
    cgpa: "8.5",
    });
  
  const [subjects, setSubjects] = useState([
    {
      name: "Mathematics",
      attended: 17,
      total: 20,
    },
    {
      name: "Applied Physics",
      attended: 15,
      total: 22,
    },
    {
      name: "DSA",
      attended: 20,
      total: 24,
    },
    {
      name: "Environmental Studies",
      attended: 17,
      total: 20,
    },
    {
      name: "AI",
      attended: 15,
      total: 22,
    },
    {
      name: "Basics of Electrical Engg.",
      attended: 20,
      total: 24,
    },
  ]);

  const calculateAverageAttendance = () => {

  const percentages = subjects.map(
    (subject) => {

      if (subject.total === 0)
        return 0;

      return (
        (subject.attended /
          subject.total) *
        100
      );
    }
  );

  const average =
    percentages.reduce(
      (acc, curr) => acc + curr,
      0
    ) / percentages.length;

  return `${Math.round(average)}%`;
};

  return (
    <div
      className={
        darkMode
          ? "flex bg-gradient-to-br from-slate-950 via-slate-900 to-black min-h-screen"
          : "flex bg-gray-100 min-h-screen"
      }
    >

      <Sidebar
        page={page}
        setPage={setPage}
      />

      <div className="ml-56 w-full px-8 py-6">

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <motion.div

          key={page}

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.4 }}>

          {renderPage()}

        </motion.div>

      </div>

    </div>
  );
}

export default App;
