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
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
      />
      <button onClick={editId ? editTask : createTask}>
        {editId ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}
