import React from "react";
import { useNavigate, useLocation } from "react-router";
import dashboard from "../assets/dashboardIconWhite.svg";
import challenge from "../assets/chanllengeIconWhite.svg";
import reports from "../assets/reportIconWhite.svg";
import settings from "../assets/settingsIconWhite.svg";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main>
      <nav className="fixed z-99 bottom-0 left-1/2 transform -translate-x-1/2 backdrop-blur-md rounded-se-xl rounded-tl-xl p-1 w-full">
        <ul className="flex justify-around p-5 space-x-4">
          <li
            className={`flex-1 flex flex-col items-center text-center relative group ${location.pathname === "/dashboard" ? "scale-125 " : "opacity-25"}`}
            onClick={() => navigate("/dashboard")}
          >
            <img
              src={dashboard}
              alt="Home"
              className="w-8 transition-transform duration-300 hover:scale-125"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          </li>
          <li
            className={`flex-1 flex flex-col items-center text-center relative group ${location.pathname === "/dashboard/challenges" ? "scale-125 " : "opacity-25"}`}
            onClick={() => navigate("/dashboard/challenges")}
          >
            <img
              src={challenge}
              alt="Search"
              className="w-8 transition-transform duration-300 hover:scale-125"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Challenges
            </span>
          </li>
          <li
            className={`flex-1 flex flex-col items-center text-center relative group ${location.pathname === "/dashboard/reports" ? "scale-125 " : "opacity-25"}`}
            onClick={() => navigate("/dashboard/reports")}
          >
            <img
              src={reports}
              alt="Notifications"
              className="w-8 transition-transform duration-300 hover:scale-125"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Notifications
            </span>
          </li>
          <li
            className={`flex-1 flex flex-col items-center text-center relative group ${location.pathname === "/dashboard/settings" ? "scale-125 " : "opacity-25"}`}
            onClick={() => navigate("/dashboard/settings")}
          >
            <img
              src={settings}
              alt="Profile"
              className="w-8 transition-transform duration-300 hover:scale-125"
            />
            <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Settings
            </span>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default MobileNavbar;
