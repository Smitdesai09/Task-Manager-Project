import { useNavigate, useLocation } from 'react-router-dom';
import appLogo from "../assets/app-logo.png";
import todayIconGrey from "../assets/today-icon-grey.png";
import todayIconRed from "../assets/today-icon-red.png";
import inboxIconGrey from "../assets/inbox-icon-grey.png";
import inboxIconRed from "../assets/inbox-icon-red.png";
import logoutIcon from "../assets/logout-icon.png";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isToday = location.pathname === "/";
  const isInbox = !isToday;

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-60 h-screen bg-white border-r border-gray-200 flex-col justify-between px-3 py-5">
      <div className="flex flex-1 flex-col gap-8 items-start">
        <img className="ml-2 mt-2 w-42" src={appLogo} />

        <div className="flex flex-col gap-2 w-full">
          <div
            className={`flex gap-3 font-semibold py-3 px-4 w-full rounded-lg cursor-pointer ${isToday ? "text-red-500 bg-red-50" : "text-black"} `}
            onClick={() => navigate("/")}
          >
            <img
              className="w-6"
              src={isToday ? todayIconRed : todayIconGrey}
            />
            <p>Today</p>
          </div>
          <div
            className={`flex gap-3 font-semibold py-3 px-4 w-full rounded-lg cursor-pointer ${isInbox ? "text-red-500 bg-red-50" : "text-black"} `}
            onClick={() => navigate("/inbox")}
          >
            <img
              className="w-6"
              src={isInbox ? inboxIconRed : inboxIconGrey}
            />
            <p>Inbox</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-gray-100 py-4 px-5 border-0 rounded-lg">
        <p className="text-sm font-semibold">smitdesai972@gmail.com</p>
        <div className="flex gap-2 items-center cursor-pointer">
          <p className="text-red-500 text-sm font-semibold">Logout</p>
          <img className="w-6" src={logoutIcon} />
        </div>
      </div>
    </aside>
  );
}
