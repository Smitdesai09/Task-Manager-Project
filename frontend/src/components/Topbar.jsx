import appLogo from "../assets/app-logo.png";
import profileIcon from "../assets/profile-icon.png";

export function Topbar(){
    return(
        <div className="lg:hidden flex items-center justify-between w-full px-4 pt-4 pb-4">
            <img 
                className="w-32"
                src={appLogo} 
            />
            <div>
                <img 
                    className="w-8"
                    src={profileIcon}
                />
            </div>
        </div>
    )
}