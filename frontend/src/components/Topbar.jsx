import appLogo from "../assets/app-logo.png";
import profileIconRed from "../assets/profile-icon-red.png";

export function Topbar(){
    return(
        <div className="lg:hidden flex items-center justify-between w-full px-5 pt-3 pb-5">
            <img 
                className="w-40"
                src={appLogo} 
            />
            <div className="bg-white border-2 border-gray-500 rounded-full p-2">
                <img 
                    className="w-5"
                    src={profileIconRed}
                />
            </div>
        </div>
    )
}