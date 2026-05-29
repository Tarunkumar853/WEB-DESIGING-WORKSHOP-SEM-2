import Notes from "../components/Notes";

const NotesPage = ({
  notes,
  setNotes,
}) => {
  return (
    <div>
      <h1 className="text-3xl text-white font-bold mb-6">
        Notes
      </h1>

      <Notes
        notes={notes}
        setNotes={setNotes}
      />
    </div>
  );
};

export default NotesPage;