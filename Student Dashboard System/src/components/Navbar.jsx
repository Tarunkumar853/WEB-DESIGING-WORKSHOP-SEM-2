import {
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <div
      className="
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-4
      py-2
      ">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h2>

        <p className="text-gray-400 mt-1">
          Manage your studies efficiently.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center bg-slate-700 px-4 py-2 rounded-xl">

          <FaSearch className="text-gray-400 mr-2" />

          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent outline-none text-white placeholder-gray-400" />

        </div>

        <button onClick={() => setDarkMode(!darkMode)}>
          <FaMoon
              className=" text-white text-xl cursor-pointer hover:text-cyan-400 transition duration-300 "/>
        </button>
        <FaBell className="text-white text-xl cursor-pointer hover:text-cyan-400 transition duration-300" />

        <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-cyan-400 transition duration-300" />

      </div>

    </div>
  );
};

export default Navbar;