import appLogo from "../assets/app-logo.png";
import profileIcon from "../assets/profile-icon.png";
import logoutIcon from "../assets/logout-icon.png";

export function Topbar({ profileModal, setProfileModal }) {
  return (
    <div className="relative">
      <div className="lg:hidden flex items-center justify-between w-full px-4 pt-4 pb-4">
        <img className="w-32" src={appLogo} />
        <div onClick={() => setProfileModal(!profileModal)}>
          <img className="w-8" src={profileIcon} />
        </div>
      </div>

      {/* modal */}
      {profileModal && (
        <div className="absolute top-12 right-3 flex flex-col gap-2 bg-white border-gray-300 py-6 px-6 border-0 rounded-lg shadow-sm">
          <p className="text-sm font-semibold">smitdesai972@gmail.com</p>
          <div className="flex gap-2 items-center cursor-pointer">
            <p className="text-red-500 text-sm font-semibold">Logout</p>
            <img className="w-6" src={logoutIcon} />
          </div>
        </div>
      )}
    </div>
  );
}
