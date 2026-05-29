const Settings = () => {
  return (
    <div
      className="
      bg-slate-900/70
      p-6
      rounded-2xl
      shadow-lg
      border
      border-slate-700
      "
      >
      
      <button onClick={() => { localStorage.clear(); window.location.reload();}}
        className=" bg-red-500 text-white px-5 py-2 rounded-xl mt-4 ">
          Reset Everything
      </button>

      <h1 className="text-3xl text-white font-bold mb-6">
        Settings
      </h1>

      <div className="space-y-4 text-gray-300">

        <p>
          Profile Settings
        </p>

        <p>
          Notification Settings
        </p>

        <p>
          Dashboard Preferences
        </p>

      </div>

    </div>
  );
};

export default Settings;