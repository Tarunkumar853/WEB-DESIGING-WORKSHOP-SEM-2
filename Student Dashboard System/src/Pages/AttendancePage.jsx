import Attendance from "../components/Attendance";

const AttendancePage = ({ subjects, setSubjects }) => {
  return (
    <div>
      <h1 className="text-3xl text-white font-bold mb-6">
        Attendance
      </h1>

      <Attendance
        subjects={subjects}
        setSubjects={setSubjects}
      />
    </div>
  );
};

export default AttendancePage;