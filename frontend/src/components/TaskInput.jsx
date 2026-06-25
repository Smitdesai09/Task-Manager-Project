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
  cardTitle,
  cardHeadline,
  inputModal,
  setInputModal
}) {
  return (
    <>
      {/* add-btn card */}
      <div className="bg-red-50 rounded-xl flex p-5 justify-between shadow-sm">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl lg:text-3xl font-semibold font-serif italic">{cardTitle}</h2>
          <p className="text-xs lg:text-sm text-gray-700 font-semibold max-w-[70%] md:max-w-[100%] leading-normal">{cardHeadline}</p>
        </div>
        <div className="flex items-center">
          <button 
            className="bg-red-500 text-sm lg:text-lg text-white font-semibold px-6 py-2 rounded-lg"
            onClick={() => setInputModal(true)}      
          >Add Task</button>
        </div>
      </div>

      {inputModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-30">
          <div className="w-full max-w-[70%] flex flex-col p-4 lg:p-6 gap-3 lg:gap-4 bg-white border-0 rounded-xl shadow-xl">
            <div className="flex items-start text-lg font-semibold">{editId ? "Update Task" : "Add Task"}</div>
            <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-5">
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
                className="text-xs md:text-sm lg:text-base font-semibold text-gray-700 border-2 border-gray-400  py-2 px-6 lg:px-8 rounded-lg cursor-pointer"
                onClick={clearInput}
              >
                Cancel
              </button>
              <button
                className="text-xs md:text-sm lg:text-base font-semibold bg-red-500 text-white py-2  px-6 lg:px-8 rounded-lg cursor-pointer"
                onClick={editId ? editTask : createTask}
              >
                {editId ? "Update Task" : "Add Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
