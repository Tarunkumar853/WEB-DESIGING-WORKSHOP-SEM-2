import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex bg-gradient-to-br from-slate-950 to-slate-900 min-h-screen">

      <Sidebar />

      <div className="ml-64 w-full p-6">
        <Navbar />

        <Dashboard />
      </div>

    </div>
  );
}

export default App;