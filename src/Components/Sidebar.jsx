import React from "react";
import logo from "../assets/Inspo Logo white 2.svg";
import dashboardIcon from "../assets/dashboardIconDark.svg";
import dashboardIconActive from "../assets/dashboardIconWhite.svg";
import challengesIcon from "../assets/chanllengeIconBlack.svg";
import challengesIconActive from "../assets/chanllengeIconWhite.svg";
import reportsIcon from "../assets/reportIconBlack.svg";
import reportsIconActive from "../assets/reportIconWhite.svg";
import settingsIcon from "../assets/settingsIconBlack.svg";
import settingsIconActive from "../assets/settingsIconWhite.svg";
import logoutIcon from "../assets/logoutIcon.svg";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-50 h-full fixed flex flex-col justify-between">
      <div>
        <Link to="/">
        
        <img alt="Logo" className="h-10" src={logo} />
        </Link>
        <nav className="space-y-5 mt-13">
          <NavLink
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "text-white bg-[#1E1E1E] py-2 ps-1 rounded-md w-45" : "text-[#dddd]"
              } hover:text-white`
            }
            to="/dashboard"
            end
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? dashboardIconActive : dashboardIcon}
                  alt="Dashboard"
                  className="mr-3 h-5"
                />{" "}
                Dashboard
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "text-white bg-[#1E1E1E] py-2 ps-1 rounded-md w-45" : "text-[#dddd]"
              } hover:text-white`
            }
            to="/dashboard/challenges"
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? challengesIconActive : challengesIcon}
                  alt="Challenges"
                  className="mr-3 h-5"
                />{" "}
                Challenges
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "text-white bg-[#1E1E1E] py-2 ps-1 rounded-md w-45" : "text-[#dddd]"
              } hover:text-white`
            }
            to="/dashboard/reports"
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? reportsIconActive : reportsIcon}
                  alt="Reports"
                  className="mr-3 h-5"
                />{" "}
                Reports
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center ${
                isActive ? "text-white bg-[#1E1E1E] py-2 ps-1 rounded-md w-45" : "text-[#dddd]"
              } hover:text-white`
            }
            to="/dashboard/settings"
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? settingsIconActive : settingsIcon}
                  alt="Settings"
                  className="mr-3 h-5"
                />{" "}
                Settings
              </>
            )}
          </NavLink>
        </nav>
      </div>
      <div className="mb-10">
        <NavLink
          className={({ isActive }) =>
            `flex items-center ${
              isActive ? "text-white bg-[#1E1E1E] py-2 ps-1 rounded-md w-45" : "text-[#dddd]"
            } hover:text-white`
          }
          to="/ "
        >
          {({ isActive }) => (
            <>
              <img src={logoutIcon} alt="Logout" className="mr-3 h-5" /> Logout
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
