import appLogo from "../assets/app-logo.png";
import todayIconGrey from "../assets/today-icon-grey.png";
import todayIconRed from "../assets/today-icon-red.png";
import inboxIconGrey from "../assets/inbox-icon-grey.png";
import inboxIconRed from "../assets/inbox-icon-red.png";
import logoutIcon from "../assets/logout-icon.png";
import { useState } from "react";

export function Sidebar() {
  const [page, setPage] = useState("today");

  return (
    <aside className="hidden w-60 min-h-full bg-white lg:flex flex-col justify-between px-5 py-5">
      <div className="flex flex-1 flex-col items-start gap-8 items-start">
        <img className="w-40" src={appLogo} />

        <div className="flex flex-col gap-2 w-full">
          <div
            className={`flex gap-3 font-semibold py-2 px-4 w-full rounded-lg cursor-pointer ${page === "today" ? "text-red-500 bg-red-50" : "text-black"} `}
            onClick={() => setPage("today")}
          >
            <img
              className="w-6"
              src={page === "today" ? todayIconRed : todayIconGrey}
            />
            <p>Today</p>
          </div>
          <div
            className={`flex gap-3 font-semibold py-2 px-4 w-full rounded-lg cursor-pointer ${page === "inbox" ? "text-red-500 bg-red-50" : "text-black"} `}
            onClick={() => setPage("inbox")}
          >
            <img
              className="w-6"
              src={page === "inbox" ? inboxIconRed : inboxIconGrey}
            />
            <p>Inbox</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-gray-100 py-3 px-5 border-0 rounded-lg">
        <p className="text-sm font-semibold">smitdesai972@gmail.com</p>
        <div className="flex gap-2 items-center cursor-pointer">
          <p className="text-red-500 text-sm font-semibold">Logout</p>
          <img className="w-6" src={logoutIcon} />
        </div>
      </div>
    </aside>
  );
}
