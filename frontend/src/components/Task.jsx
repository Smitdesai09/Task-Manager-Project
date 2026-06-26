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
    <div className={`flex items-center justify-between border-b-2 last:border-b-0 border-gray-200 px-3.5 lg:px-5 py-3 ${isCompleted ? "bg-white opacity-60" : "bg-white"}  `}>
      <div className="flex items-start gap-4 md:gap-6 min-w-0">
        <input
          className="mt-2 lg:mt-3 scale-110 md:scale-130 lg:scale-150 accent-red-500"
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleTask(id)}
        />

        <div className="flex flex-col min-w-0">
          <h4 className={`text-sm md:text-base lg:text-xl font-semibold truncate ${isCompleted ? "line-through text-gray-700" : "text-black"}`}>
            {title}
          </h4>

          <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-700 truncate mt-0.5">
            {description === "" ? "–" : description}
          </p>

          <p className="text-xs md:text-sm lg:text-base text-gray-500 font-semibold mt-1">
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
