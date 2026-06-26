import { Task } from "./Task";

export function Tasks({
  tasks,
  filter,
  setEdit,
  toggleTask,
  deleteTask,
  setFilter,
  filterTask,
  view,
  getTodaysTasks,
  noTaskDescription,
  setInputModal
}) {
  const todaysTask = getTodaysTasks();
  const filteredTasks = filterTask(view);
  let decider;
  if(view === "Today"){
    decider = todaysTask;
  }
  else{
    decider = tasks;
  }

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
      {decider.length === 0 ? (
        <div className="bg-white min-h-80 lg:min-h-120 border-0 border-gray-200 rounded-xl shadow-sm flex flex-col justify-center">
          <div className="w-full flex flex-col items-center gap-3 md:gap-5">
            <p className="text-xl md:text-2xl font-bold italic">No tasks yet</p>
            <p className="text-sm md:text-base text-gray-800 max-w-[70%] text-center">
              {noTaskDescription}
            </p>
            <button 
              className="py-2 px-8 bg-red-500 text-white text-sm lg:text-lg font-semibold rounded-lg mt-5 hover:bg-red-600 active:scale-95 cursor-pointer transition-all duration-300"
              onClick={() => setInputModal(true)}
            >Add Task
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 lg:gap-3 mt-3 lg:mt-4">
          <div className="flex gap-2 items-center ml-1">
            <p className="flex items-start  text-gray-700 font-bold text-base lg:text-xl">
              {view === "Today" ? 'Today\'s Tasks' : 'Your Tasks'}
            </p>
            <p className="text-xs lg:text-sm font-bold px-2 py-0.5 rounded-full bg-gray-200">
              {view === "Today" ? todaysTask.length : tasks.length}
            </p>
          </div>
          <div className="flex gap-1">
            <button
              className={`px-6 md:px-7 py-1.5 rounded-md text-xs md:text-sm lg:text-base font-semibold ${filter === "All" ? "bg-red-500 text-white border-0" : "border-1 bg-white border-gray-200"}`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`px-6 md:px-7 py-1.5 rounded-md text-xs md:text-sm lg:text-base font-semibold ${filter === "Pending" ? "bg-red-500 text-white border-0" : "border-1 bg-white border-gray-200"}`}
              onClick={() => setFilter("Pending")}
            >
              Due
            </button>
            <button
              className={`px-6 md:px-7 py-1.5 rounded-md text-xs md:text-sm lg:text-base font-semibold ${filter === "Completed" ? "bg-red-500 text-white border-0" : "border-1 bg-white border-gray-200"}`}
              onClick={() => setFilter("Completed")}
            >
              Done
            </button>
          </div>
          <div className="flex flex-col rounded-xl shadow-sm overflow-hidden">
            {taskComponents}
          </div>
        </div>
      )}
    </>
  );
}
