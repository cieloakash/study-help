import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Create from "./components/Create";
import Popupbox from "./components/Popupbox";
import { CgPlayListAdd } from "react-icons/cg";

import { useState } from "react";
import ScheduleImport from "./components/ScheduleImport";

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <Popupbox />
      <Navbar />
      <button
        onClick={() => setOpenDialog(true)}
        className="absolute right-2 bottom-1 z-50"
      >
        <CgPlayListAdd className="w-10 h-10" />
      </button>

      {openDialog && <ScheduleImport setOpenDialog={setOpenDialog} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
