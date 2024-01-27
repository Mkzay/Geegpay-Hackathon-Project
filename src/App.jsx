import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import { useState } from "react";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="font-PlusJ">
      <Dashboard toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Home />
    </div>
  );
}
