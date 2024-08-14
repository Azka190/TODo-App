"use client"
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className="text-center text-gray-500 mt-4">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center bg-white/90 p-4 rounded-lg shadow-md mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{t.title}</h2>
            <h3 className="text-sm text-gray-600">{t.desc}</h3>
          </div>
          <button
            onClick={() => deleteHandler(i)}
            className="text-red-500 hover:text-red-700 transition-colors duration-300"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="min-h-screen font-serif bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex items-center justify-center">
      <div className="bg-white w-full max-w-[400px] h-auto p-8 rounded-lg backdrop-blur-sm bg-white/30 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-white text-3xl font-bold">TO DO APP</h1>
        </div>
        <div>
          <form className="space-y-4" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Task Here"
              className="w-full py-2 px-4 rounded bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Description Here"
              className="w-full py-2 px-4 rounded bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
              Add Task
            </button>
          </form>
          <div className="mt-6">
            <ul>
              {renderTask}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
