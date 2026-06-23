import { useEffect, useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Progress } from "./components/Progress";
import { TaskInput } from "./components/TaskInput";
import { Tasks } from "./components/Tasks";

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filterTask = () => {
    if (filter === "All") {
      return tasks;
    } else if (filter === "Pending") {
      return tasks.filter((task) => task.isCompleted === false);
    } else if (filter === "Completed") {
      return tasks.filter((task) => task.isCompleted === true);
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
  };

  return (
    <div className="flex lg:gap-5 h-screen">
      <Sidebar />
      <div className="flex flex-col min-h-0 flex-1 gap-2 p-4 lg:py-3 lg:pr-6">
        <Progress tasks={tasks} />
        <TaskInput
          title={title}
          description={description}
          dueDate={dueDate}
          setTitle={setTitle}
          setDescription={setDescription}
          setDueDate={setDueDate}
          createTask={createTask}
          editId={editId}
          editTask={editTask}
          clearInput={clearInput}
        />
        <Tasks
          filter={filter}
          setFilter={setFilter}
          filterTask={filterTask}
          setEdit={setEdit}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
