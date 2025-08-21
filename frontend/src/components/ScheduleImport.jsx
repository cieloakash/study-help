import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
const ScheduleImport = ({ setOpenDialog }) => {
  const closeDialog = () => setOpenDialog(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const handleFilechange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleFileUpload = async () => {
    if (!file) return setError("choose one file");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:8000/upload",
        formData
      );

      setUploadStatus("File uploaded successfully");
      console.log(response.data);
    } catch (error) {
      setUploadStatus("Error uploading file");
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 backdrop-blur-md bg-black/30">
      <div
        className="relative bg-gray-300/80 rounded-xl max-w-[90vw] max-h-[80vh] w-full sm:w-[600px] overflow-hidden
        border border-white/50 backdrop-blur-lg
        transform-style-preserve-3d perspective-1000
        hover:rotate-x-[3deg] hover:rotate-y-[2deg] hover:translate-z-[20px]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] hover:-translate-x-[4px] hover:-translate-y-[4px] transition-all duration-500 "
      >
        <div className="relative z-10 p-6 w-full  rounded-xl  mx-auto">
          {/* Close Button */}
          <button
            onClick={closeDialog}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition"
            aria-label="Close"
          >
            <IoMdCloseCircle size={24} />
          </button>

          {/* File Input */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Upload Excel File
            </label>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFilechange}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-gray-700 hover:file:bg-blue-100 transition"
            />
            <p
              className={`text-sm ${error ? "text-red-500" : "text-gray-600"}`}
            >
              {error ? (
                <strong>{error}</strong>
              ) : (
                <>
                  File must contain columns:{" "}
                  <strong>"startdate", "topic", "enddate"</strong>
                </>
              )}
            </p>
          </div>

          {/* Upload Button */}
          <button
            onClick={handleFileUpload}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 mt-2 rounded transition"
          >
            Add
          </button>

          {/* Status Message */}
          {uploadStatus && (
            <p
              className={`text-sm ${
                uploadStatus.includes("Error")
                  ? "text-red-500"
                  : "text-green-600 font-semibold"
              }`}
            >
              {uploadStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleImport;
