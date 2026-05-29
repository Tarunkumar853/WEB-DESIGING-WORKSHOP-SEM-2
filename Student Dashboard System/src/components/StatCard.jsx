import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  color,
  icon,
}) => {
  return (
    <motion.div

      initial={{ opacity: 0, y: 30 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.5 }}

      whileHover={{
        scale: 1.04,
      }}

      className="
      bg-slate-900/70
      backdrop-blur-lg
      p-6
      rounded-2xl
      border
      border-slate-700
      shadow-xl
      hover:shadow-cyan-500/10
      transition
      duration-300
      "
    >

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-gray-400 text-lg">
            {title}
          </h2>

          <p className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </p>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </motion.div>
  );
};

export default StatCard;