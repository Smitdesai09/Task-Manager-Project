export function Progress({ tasks }) {
  const completed = tasks.filter((task) => task.isCompleted === true).length;
  const total = tasks.length;

  return (
    <>
      {tasks.length > 0 && (
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-5 border-0 rounded-xl">
          <p className="text-xl font-semibold mb-2 lg:mb-0">Your Progress</p>
          <div className="flex flex-col gap-2">
            <p className="text-gray-700 text-sm">
              You've completed {completed} out of {total} tasks.
            </p>
            <div className="w-120 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-red-500 rounded-full"
                style={{ width: `${(completed / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
