export function TaskInput({
  title,
  setTitle,
  description,
  setDescription,
  dueDate,
  setDueDate,
  createTask,
  editId,
  editTask,
  clearInput,
}) {
  return (
    <div className="flex flex-col p-4 lg:p-6 gap-2 lg:gap-4 bg-white border-0 rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-5">
        <input
          className="flex grow w-full text-xs md:text-sm lg:text-base border-2 border-gray-300 rounded-lg p-2 lg:pl-4 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-0"
          type="text"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          className="w-full text-xs md:text-sm lg:text-base border-2 border-gray-300 rounded-lg p-2 lg:pl-4 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-0"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>
      <input
        className="text-xs md:text-sm lg:text-base border-2 border-gray-300 rounded-lg p-2 lg:pl-4 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-0"
        type="text"
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <div className="flex justify-end gap-2">
        <button
          className="text-xs md:text-sm lg:text-base font-semibold text-gray-700 border-2 border-gray-500  py-2 px-6 lg:px-8 rounded-lg cursor-pointer"
          onClick={clearInput}
        >
          Clear
        </button>
        <button
          className="text-xs md:text-sm lg:text-base font-semibold bg-red-500 text-white py-2  px-6 lg:px-8 rounded-lg cursor-pointer"
          onClick={editId ? editTask : createTask}
        >
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>
    </div>
  );
}
