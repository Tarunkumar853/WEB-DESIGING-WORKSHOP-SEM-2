import CgpaManager from "../components/CgpaManager";

const CgpaPage = ({
  semesters,
  setSemesters,
  targetCgpa,
  setTargetCgpa,
  remainingSemesters,
  setRemainingSemesters,
}) => {
  return (
    <div>

      <h1 className="text-3xl text-white font-bold mb-6">
        CGPA Manager
      </h1>

      <CgpaManager
        semesters={semesters}
        setSemesters={setSemesters}
        targetCgpa={targetCgpa}
        setTargetCgpa={setTargetCgpa}
        remainingSemesters={remainingSemesters}
        setRemainingSemesters={setRemainingSemesters}
      />

    </div>
  );
};

export default CgpaPage;