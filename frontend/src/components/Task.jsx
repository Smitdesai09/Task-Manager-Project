import editIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/delete-icon.png";

export function Task({
  id,
  title,
  description,
  dueDate,
  isCompleted,
  toggleTask,
  deleteTask,
  setEdit,
}) {
  return (
    <div className="flex items-center justify-between bg-white  border-t-2 border-gray-200 gap-10 px-5 py-3">
      <div className="flex gap-5">
        <input
          className="w-5 accent-red-500"
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleTask(id)}
        />
        <div className="flex flex-col w-50 lg:w-80">
          <h4 className="text-lg font-semibold">
            {isCompleted ? <strike>{title}</strike> : title}
          </h4>
          <p className="text-xs text-gray-700 truncate">
            {description === "" ? "-" : description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 lg:gap-15">
        <p className="text-sm lg:text-base">{dueDate}</p>
        <div className="flex items-center gap-3 lg:gap-5">
          <button className="cursor-pointer" onClick={() => setEdit(id)}>
            <img className="w-6" src={editIcon} />
          </button>
          <button className="cursor-pointer" onClick={() => deleteTask(id)}>
            <img className="w-6" src={deleteIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
