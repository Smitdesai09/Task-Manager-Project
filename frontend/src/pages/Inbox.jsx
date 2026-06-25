import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { TaskInput } from "../components/TaskInput";
import { Tasks } from "../components/Tasks";
import { Bottombar } from "../components/Bottombar";

function Inbox({
  tasks,
  title,
  description,
  dueDate,
  setTitle,
  setDescription,
  setDueDate,
  createTask,
  editId,
  editTask,
  clearInput,
  filter,
  setFilter,
  filterTask,
  setEdit,
  toggleTask,
  deleteTask,
  getTodaysTasks,
  inputModal,
  setInputModal,
  profileModal,
  setProfileModal
}) {
  return (
    <div>
      <Sidebar />
      <Topbar profileModal={profileModal} setProfileModal={setProfileModal} />
      <div className="flex flex-col lg:ml-62 pb-20 gap-3 p-4 py-2 lg:py-3 lg:pr-6">
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
          cardTitle="Inbox"
          cardHeadline="Capture ideas before you forgot"
          inputModal={inputModal}
          setInputModal={setInputModal}
        />
        <Tasks
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
          filterTask={filterTask}
          setEdit={setEdit}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          getTodaysTasks={getTodaysTasks}
          view="Inbox"
          noTaskDescription="You don't have any tasks in your inbox. Create you first task and stay organized!"
          setInputModal={setInputModal}
        />
      </div>
      <Bottombar />
    </div>
  );
}

export default Inbox;
