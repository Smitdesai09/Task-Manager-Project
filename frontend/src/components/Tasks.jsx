import { Task } from "./Task";

export function Tasks({
  tasks,
  setEdit,
  toggleTask,
  deleteTask,
  filter,
  setFilter,
  filterTask,
}) {
  const filteredTasks = filterTask();

  const taskComponents = filteredTasks.map((task) => {
    return (
      <Task
        key={task.id}
        id={task.id}
        isCompleted={task.isCompleted}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        setEdit={setEdit}
      />
    );
  });

  return (
    <>
      <div>
        <button onClick={() => setFilter("All")}>
          All{filter === "All" && "*"}
        </button>
        <button onClick={() => setFilter("Pending")}>
          Pending{filter === "Pending" && "*"}
        </button>
        <button onClick={() => setFilter("Completed")}>
          Completed{filter === "Completed" && "*"}
        </button>
      </div>
      {tasks.length > 0 && (
        <div>
          <progress
            value={tasks.filter((task) => task.isCompleted === true).length}
            max={tasks.length}
          />
        </div>
      )}
      {taskComponents}
    </>
  );
}
