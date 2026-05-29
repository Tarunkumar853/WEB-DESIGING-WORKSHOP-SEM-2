import {
  FaHome,
  FaClipboardList,
  FaStickyNote,
  FaCog,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { FaChartBar } from "react-icons/fa";

const Sidebar = ({ page, setPage }) => {

  const menuItems = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: <FaHome />,
    },
    {
      name: "attendance",
      label: "Attendance",
      icon: <FaChartBar />,
    },
    {
      name: "cgpa",
      label: "CGPA",
      icon: "🎓",
    },
    {
      name: "timetable",
      label: "Timetable",
      icon: "📅",
    },
    {
      name: "assignments",
      label: "Assignments",
      icon: <FaClipboardList />,
    },
    {
      name: "notes",
      label: "Notes",
      icon: <FaStickyNote />,
    },
    {
      name: "settings",
      label: "Settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div
      className="
      w-56
      min-h-screen
      bg-slate-950
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

      <ul className="space-y-6">

        {menuItems.map((item) => (

          <motion.li
            whileHover={{
                    scale: 1.05,
                    x: 5,
            }}

            key={item.name}
            onClick={() => setPage(item.name)}
            className={`
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            cursor-pointer
            transition
            duration-300

            ${
              page === item.name
                ? "bg-cyan-400 text-black"
                : "hover:bg-slate-800"
            }
            `}
          >

            {item.icon}

            {item.label}

          </motion.li>

        ))}

      </ul>

    </div>
  );
};

export default Sidebar;