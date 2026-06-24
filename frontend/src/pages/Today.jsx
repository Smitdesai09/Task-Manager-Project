import { Sidebar } from "../components/Sidebar"
import { Topbar } from "../components/Topbar";
import { Progress } from "../components/Progress";
import { TaskInput } from "../components/TaskInput";
import { Tasks } from "../components/Tasks";
import { Bottombar } from "../components/Bottombar";

function Today({tasks, title, description, dueDate, setTitle, setDescription, setDueDate, createTask, editId, editTask, clearInput, filter, setFilter, filterTask, setEdit, toggleTask, deleteTask}) {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className="flex flex-col lg:ml-62 pb-20 gap-4 p-4 pt-2 lg:py-3 lg:pr-6">
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
          view="Today"
        />
      </div>
      <Bottombar />
    </div>
  );
}

export default Today;
