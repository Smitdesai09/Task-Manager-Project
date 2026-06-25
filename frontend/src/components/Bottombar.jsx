import { useNavigate, useLocation } from "react-router-dom";
import todayIconGrey from "../assets/today-icon-grey.png";
import todayIconRed from "../assets/today-icon-red.png";
import inboxIconGrey from "../assets/inbox-icon-grey.png";
import inboxIconRed from "../assets/inbox-icon-red.png";

export function Bottombar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isToday = location.pathname === "/";
    const isInbox = !isToday;
    
    return(
        <div className="lg:hidden bg-white fixed left-0 right-0 bottom-0  flex items-center px-1.5 py-1.5 justify-between border-t-1 border-gray-200">
            <div 
                className={`w-full flex flex-col items-center text-xs font-semibold gap-1 px-10 py-1 rounded-lg ${isToday ? "text-red-600 bg-red-100" : "text-black"}`}
                onClick={() => navigate("/")}>
                <img 
                    className="w-5"
                    src={isToday ? todayIconRed : todayIconGrey}
                />
                <p>Today</p>
            </div>
            <div 
                className={`w-full flex flex-col items-center text-xs font-semibold gap-1 px-10 py-1 rounded-lg ${isInbox ? "text-red-600 bg-red-100" : "text-black"}`}
                onClick={() => navigate("/inbox")}>
                <img 
                    className="w-5"
                    src={isInbox ? inboxIconRed : inboxIconGrey}
                />
                <p>Inbox</p>
            </div>
        </div>
    );
}
