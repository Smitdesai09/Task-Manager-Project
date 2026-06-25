export function Progress({ getTodaysTasks }) {
  const todaysTasks = getTodaysTasks()
  const completed = todaysTasks.filter((task) => task.isCompleted === true).length;
  const total = todaysTasks.length;

  return (
    <>
      {todaysTasks.length > 0 && (
        <div className="flex flex-col items-start justify-between gap-3 bg-white p-3.5 md:p-4 lg:p-5 border-0 rounded-xl shadow-sm">
          <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-1">
            <p className="text-sm md:text-base lg:text-lg font-semibold">
              You're making progress!
            </p>
            <p className="text-xs text-gray-700 md:text-sm lg:text-base font-semibold">
              {completed}/{total} tasks completed
            </p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
}
