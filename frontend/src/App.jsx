import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Today from "./pages/Today";
import Inbox from "./pages/Inbox";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("All");
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(
    new Date().toLocaleDateString("sv-SE"),
  );
  const [inputModal, setInputModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const getTodaysTasks = () => {
    return tasks.filter(
      (task) => task.dueDate == new Date().toLocaleDateString("sv-SE"),
    );
  };
  const filterTask = (view) => {
    let filteredTasks = tasks;

    if (view === "Today") {
      filteredTasks = getTodaysTasks();
    }

    if (filter === "All") {
      return filteredTasks;
    } else if (filter === "Pending") {
      return filteredTasks.filter((task) => task.isCompleted === false);
    } else if (filter === "Completed") {
      return filteredTasks.filter((task) => task.isCompleted === true);
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  const createTask = () => {
    if (title.trim() === "") {
      alert("Error: Title is required field!");
      return;
    }

    //create task
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        isCompleted: false,
        title: title.trim(),
        description: description.trim(),
        dueDate: dueDate,
      },
    ]);
    setTitle("");
    setDescription("");
    setDueDate(new Date().toLocaleDateString("sv-SE"));
    setInputModal(false);
  };

  const setEdit = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      alert("ERROR: Task not found!");
      return;
    }

    setEditId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
    setInputModal(true);
  };

  const editTask = () => {
    if (title.trim() === "") {
      alert("Error: Title is required field!");
      return;
    }

    const updatedTasks = tasks.map((task) => {
      if (task.id === editId) {
        return {
          ...task,
          title: title,
          description: description,
          dueDate: dueDate,
        };
      }
      return task;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);

    setEditId(null);
    setTitle("");
    setDescription("");
    setDueDate(new Date().toLocaleDateString("sv-SE"));
    setInputModal(false);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    console.log(updatedTasks.length);
    setTasks(updatedTasks);

    if (id === editId) {
      setEditId(null);
      setTitle("");
      setDescription("");
      setDueDate(new Date().toLocaleDateString("sv-SE"));
    }
  };

  const clearInput = () => {
    setEditId(null);
    setTitle("");
    setDescription("");
    setDueDate(new Date().toLocaleDateString("sv-SE"));
    setInputModal(false)
  };

  const appProps = {
    tasks,
    title,
    description,
    dueDate,
    setTitle,
    setDescription,
    setDueDate,
    createTask,
    editId,
    editTask,
    clearInput,
    filter,
    setFilter,
    filterTask,
    setEdit,
    toggleTask,
    deleteTask,
    getTodaysTasks,
    inputModal,
    setInputModal,
    profileModal,
    setProfileModal
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Today {...appProps} />} />
          <Route path="/inbox" element={<Inbox {...appProps} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
