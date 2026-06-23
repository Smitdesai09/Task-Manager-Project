import { Task } from "./Task";

export function Tasks({
  filter,
  setEdit,
  toggleTask,
  deleteTask,
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
    <div>
      <div className="flex px-5 py-4 gap-2 bg-white w-full rounded-t-xl">
        <button
          className={`w-full md:w-fit px-8 py-2 md:py-1 rounded-lg lg:text-sm font-semibold ${filter === "All" ? "bg-red-100 text-red-500 border-0" : "border-2 border-gray-300"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`w-full md:w-fit px-8 py-2 md:py-1 rounded-lg lg:text-sm font-semibold ${filter === "Pending" ? "bg-red-100 text-red-500 border-0" : "border-2 border-gray-300"}`}
          onClick={() => setFilter("Pending")}
        >
          Due
        </button>
        <button
          className={`w-full md:w-fit px-8 py-2 md:py-1 rounded-lg lg:text-sm font-semibold ${filter === "Completed" ? "bg-red-100 text-red-500 border-0" : "border-2 border-gray-300"}`}
          onClick={() => setFilter("Completed")}
        >
          Done
        </button>
      </div>
      <div
        className="flex flex-col h-130 md:h-70 lg:h-140 overflow-y-auto"
        rounded-b-xl
      >
        {taskComponents}
      </div>
    </div>
  );
}
