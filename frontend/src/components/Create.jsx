import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { CgPlayListAdd } from "react-icons/cg";
const Create = () => {
  const [todos, setTodos] = useState([]);
  const [currTodo, setCurrTodo] = useState("");
  const [formData, setFormData] = useState({
    points: [],
    topic: "",
    date: "",
    desc: "",
  });

  const add = () => {
    if (currTodo.trim() === "") return;
    setFormData({ ...formData, points: [...formData.points, currTodo] });
    setCurrTodo("");
  };

  const create = (e) => {
    e.preventDefault();
    if (
      formData.topic.trim() === "" ||
      formData.desc.trim() === "" ||
      formData.points.length === 0
    )
      return;
    const newTodo = {
      ...formData,
      date: formData.date || new Date().toISOString().split("T")[0],
      topic: formData.topic.trim(),
      desc: formData.desc.trim(),
    };

    setTodos([...todos, newTodo]);
    setFormData({
      points: [],
      topic: "",
      date: "",
      desc: "",
    });
  };

  return (
    

    <div className="min-h-screen px-4 py-8 mt-12 md:mt-0 bg-gradient-to-br from-gray-100 to-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column - Form */}
      <div className="flex justify-center items-center">
        <div
          className="relative w-full max-w-md bg-white/90 p-6 space-y-6 rounded-xl shadow-lg backdrop-blur-md 
      transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-2 hover:translate-z-5 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1"
          aria-label="Todo creation form"
        >
          {/* Date Picker */}
          <label className="sr-only" htmlFor="date">
            Select Date
          </label>
          <input
            id="date"
            type="date"
            className="absolute top-2 right-6 p-1 text-sm border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          {/* Topic Input */}
          <div>
            <label
              htmlFor="topic"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Topic
            </label>
            <input
              id="topic"
              placeholder="Enter topic"
              type="text"
              value={formData.topic}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, topic: e.target.value })
              }
            />
          </div>

          {/* Points Input */}
          <div>
            <label
              htmlFor="points"
              className="block mb-1 text-sm font-medium text-gray-800"
            >
              Points
            </label>
            <div className="flex gap-2">
              <input
                id="points"
                placeholder="Add point"
                type="text"
                className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                value={currTodo}
                onChange={(e) => setCurrTodo(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    add();
                  }
                }}
              />
              <button
                type="button"
                className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                onClick={add}
                aria-label="Add point"
              >
                <CgPlayListAdd className="w-6 h-6" />
              </button>
            </div>

            {/* Points List */}
            {formData.points.length > 0 && (
              <div className="mt-3 max-h-20 overflow-y-auto space-y-1 text-sm text-gray-700">
                <ul className="list-disc list-inside">
                  {formData.points.map((point, index) => (
                    <li key={`point-${index}`}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="desc"
              className="block mb-1 text-sm font-medium text-gray-800"
            >
              Description
            </label>
            <textarea
              id="desc"
              placeholder="Write a description..."
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={formData.desc}
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
            />
          </div>

          {/* Create Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="group relative transition-transform duration-300"
              onClick={create}
              aria-label="Create todo"
            >
              <span className="absolute right-12 bottom-1/2 translate-y-1/2 translate-x-4 group-hover:translate-x-0 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Create
              </span>
              <IoIosAddCircle className="w-10 h-10 text-gray-700 hover:text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Todos */}
      <div
        className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-lg shadow-md p-4 mt-6 md:mt-20 space-y-2 overflow-y-auto max-h-[70vh]"
        aria-label="List of todos"
      >
        <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">
          Todos
        </h2>

        {todos.length === 0 ? (
          <p className="text-sm text-gray-500">No todos yet.</p>
        ) : (
          todos.map((todo, index) => (
            <div
              key={`todo-${index}`}
              className="bg-gray-100 rounded-md px-3 py-2 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <p className="text-xs text-gray-500">{todo.date}</p>
              <p className="text-sm font-medium text-gray-800">{todo.topic}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Create;
