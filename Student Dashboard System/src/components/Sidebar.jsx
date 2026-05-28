import {
  FaHome,
  FaBook,
  FaClipboardList,
  FaStickyNote,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="
      w-56
      min-h-screen
      bg-slate-900
      text-white
      p-6
      fixed
      border-r
      border-slate-700
      "
    >

      <h1 className="text-3xl font-bold text-cyan-400 mb-12">
        StudyDash
      </h1>

      <ul className="space-y-8 text-lg">

        <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">

          <FaHome />
          Dashboard

        </li>

        <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">

          <FaBook />
          Attendance

        </li>

        <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">

          <FaClipboardList />
          Assignments

        </li>

        <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">

          <FaStickyNote />
          Notes

        </li>

        <li className="flex items-center gap-3 hover:text-cyan-400 transition duration-300 cursor-pointer">

          <FaCog />
          Settings

        </li>

      </ul>

    </div>
  );
};

export default Sidebar;