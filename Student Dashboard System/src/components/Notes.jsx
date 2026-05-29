import { useState, useEffect } from "react";

const Notes = ({ notes, setNotes,}) => {

  const [note, setNote] = useState("");

  const addNote = () => {

    if (note.trim() === "") return;

    setNotes([...notes, note]);

    setNote("");
  };

  const deleteNote = (index) => {

    const updatedNotes = notes.filter(
      (_, i) => i !== index
    );

    setNotes(updatedNotes);
  };

  return (
    <div
      className="
      bg-slate-900/70 backdrop-blur-lg
      p-6
      rounded-2xl
      mt-8
      shadow-lg
      border
      border-slate-700
      min-h-[120px]
      "
    >

      <h2 className="text-2xl font-bold text-white mb-6">
        Notes Section
      </h2>

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Write note..."
          value={note}
          onChange={(e) =>
            setNote(e.target.value)
          }
          className="
          flex-1
          bg-slate-700
          text-white
          px-4
          py-3
          rounded-xl
          outline-none
          "
        />

        <button
          onClick={addNote}
          className="
          bg-cyan-400 hover:bg-cyan-300 hover:scale-105
          text-black
          px-6
          rounded-xl
          font-semibold
          hover:bg-cyan-300
          transition
          duration-300
          "
        >
          Add
        </button>

      </div>

      <div className="space-y-4">

        {notes.map((item, index) => (

          <div
            key={index}
            className="
            flex
            justify-between
            items-center
            bg-slate-700
            p-4
            rounded-xl
            "
          >

            <p className="text-white">
              {item}
            </p>

            <button
              onClick={() =>
                deleteNote(index)
              }
              className="
              bg-red-500
              text-white
              px-4
              py-1
              rounded-lg
              hover:bg-red-400
              transition
              duration-300
              "
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Notes;