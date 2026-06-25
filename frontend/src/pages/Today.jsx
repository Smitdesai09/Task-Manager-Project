import { Sidebar } from "../components/Sidebar"
import { Topbar } from "../components/Topbar";
import { Progress } from "../components/Progress";
import { TaskInput } from "../components/TaskInput";
import { Tasks } from "../components/Tasks";
import { Bottombar } from "../components/Bottombar";

function Today({tasks, title, description, dueDate, setTitle, setDescription, setDueDate, createTask, editId, editTask, clearInput, filter, setFilter, filterTask, setEdit, toggleTask, deleteTask, getTodaysTasks}) {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className="flex flex-col lg:ml-62 pb-20 gap-6 p-4 py-2 lg:py-3 lg:pr-6">
        <Progress getTodaysTasks={getTodaysTasks} />
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
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
          filterTask={filterTask}
          setEdit={setEdit}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          view="Today"
          getTodaysTasks={getTodaysTasks}
          noTaskDescription="Looks like your task list is empty. Create your first task and start organizing your day!"
        />
      </div>
      <Bottombar />
    </div>
  );
}

export default Today;
