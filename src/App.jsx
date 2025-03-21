import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import UserNavbar from "./Components/UserNavbar";
import ScrollToTop from "./Hooks/ScrollToTop";
import React, { lazy } from "react";
import Error from "./Components/Error";
import { Toaster } from "sonner";
import Tag from "./Auth/Tag";
import SignOut from "./Auth/SignOut";
import SignIn from "./Auth/SignIn";
import ForgotPassword from "./Auth/ForgotPassword";

const Dashboard = lazy(() => import("./Components/UserPages/Dashboard"));
const Profile = lazy(() => import("./Components/UserPages/Profile"));
const Settings = lazy(() => import("./Components/UserPages/Settings"));
const Challenges = lazy(() => import("./Components/UserPages/Challenges"));
const Reports = lazy(() => import("./Components/UserPages/Reports"));

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<UserNavbar />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard/challenges" element={<Challenges />} />
              <Route path="/dashboard/reports" element={<Reports />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
            </Route>
            <Route path="tags" element={<Tag/>} />
            <Route path="/signup" element={<SignOut/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="forgotpassword" element={<ForgotPassword/>}/>
            
            <Route path="*" element={<Error />} />
          </Routes>
        </ScrollToTop>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
