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
    <div className="flex items-center justify-between bg-white border-b-2 last:border-b-0 border-gray-200 px-3 lg:px-5 py-3">
      <div className="flex items-start gap-3 md:gap-6 min-w-0">
        <input
          className="mt-2 lg:mt-3 scale-110 md:scale-130 lg:scale-150 accent-red-500"
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleTask(id)}
        />

        <div className="flex flex-col min-w-0">
          <h4 className="text-sm md:text-base lg:text-lg font-semibold truncate">
            {isCompleted ? <strike>{title}</strike> : title}
          </h4>

          <p className="text-xs font-semibold text-gray-700 truncate mt-1">
            {description === "" ? "-" : description}
          </p>

          <p className="text-xs md:text-sm text-red-500 font-semibold mt-1">
            {dueDate}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-3 lg:gap-4 shrink-0">
        <button className="cursor-pointer" onClick={() => setEdit(id)}>
          <img className="w-4.5 md:w-6" src={editIcon} />
        </button>

        <button className="cursor-pointer" onClick={() => deleteTask(id)}>
          <img className="w-4.5 md:w-6" src={deleteIcon} />
        </button>
      </div>
    </div>
  );
}
