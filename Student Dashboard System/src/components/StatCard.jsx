const StatCard = ({ title, value, color }) => {
  return (
    <div
      className="
      bg-slate-800
      p-6
      rounded-2xl
      shadow-lg
      hover:scale-105
      transition
      duration-300
      border border-slate-700
      "
    >
      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <p className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </p>
    </div>
  );
};

export default StatCard;