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
    <div className="flex flex-col p-6 gap-2 lg:gap-4 bg-white border-0 rounded-xl">
      <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5">
        <input
          className="flex grow w-full border-2 border-gray-300 rounded-lg p-2 pl-5 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-0"
          type="text"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-0"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>
      <input
        className="border-2 border-gray-300 rounded-lg p-2 pl-5 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-0"
        type="text"
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <div className="flex justify-end gap-2">
        <button
          className="text-gray-700 border-2 border-gray-500 py-2 px-8 rounded-lg cursor-pointer"
          onClick={clearInput}
        >
          Clear
        </button>
        <button
          className="bg-red-500 text-white py-2 px-8 rounded-lg cursor-pointer"
          onClick={editId ? editTask : createTask}
        >
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>
    </div>
  );
}
