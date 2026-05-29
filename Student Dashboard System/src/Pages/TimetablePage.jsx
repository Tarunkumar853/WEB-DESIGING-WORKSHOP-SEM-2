import TimetableManager from "../components/TimetableManager";

const TimetablePage = ({
  classes,
  setClasses,
  exams,
  setExams,
}) => {
  return (
    <div>

      <h1 className="text-3xl text-white font-bold mb-6">
        Timetable
      </h1>

      <TimetableManager
        classes={classes}
        setClasses={setClasses}
        exams={exams}
        setExams={setExams}
      />

    </div>
  );
};

export default TimetablePage;