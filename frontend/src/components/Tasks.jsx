import { Task } from "./Task";

export function Tasks({
  filter,
  setEdit,
  toggleTask,
  deleteTask,
  setFilter,
  filterTask,
  view
}) {
  const filteredTasks = filterTask(view);

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
      <div className="flex px-2.5 md:px-3 lg:px-5 py-2 md:py-3 lg:py-4 gap-2 bg-white w-full rounded-t-xl shadow-md">
        <button
          className={`w-full md:w-fit px-4 md:px-8 py-1.5 rounded-lg text-xs md:text-sm lg:text-lg font-semibold ${filter === "All" ? "bg-red-500 text-white border-0" : "border-2 border-gray-300"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`w-full md:w-fit px-4 md:px-8 py-1.5 rounded-lg text-xs md:text-sm lg:text-lg font-semibold ${filter === "Pending" ? "bg-red-500 text-white border-0" : "border-2 border-gray-300"}`}
          onClick={() => setFilter("Pending")}
        >
          Due
        </button>
        <button
          className={`w-full md:w-fit px-4 md:px-8 py-1.5 rounded-lg text-xs md:text-sm lg:text-lg font-semibold ${filter === "Completed" ? "bg-red-500 text-white border-0" : "border-2 border-gray-300"}`}
          onClick={() => setFilter("Completed")}
        >
          Done
        </button>
      </div>
      <div className="flex flex-col rounded-b-xl shadow-md overflow-hidden">{taskComponents}</div>
    </div>
  );
}
