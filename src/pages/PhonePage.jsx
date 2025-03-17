import React from "react";
import NotifyImg from "../assets/Notification.png";
import phoneImg from "../assets/Transparent iPhone 16 Pro Mockup (Titanium Black) (Mockuuups Studio).png";
import ideaImg from "../assets/idea box.png";

const PhonePage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center relative">
        <img
          src={NotifyImg}
          alt=""
          className="absolute left-1/4 top-40 w-40 md:w-40 lg:w-90  transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        />
        <img src={phoneImg} alt="" className="w-70 md:w-1/2 lg:w-100" />
        <img
          src={ideaImg}
          alt=""
          className="absolute w-40 md:w-40 lg:w-90 right-1/4 bottom-40 transform translate-x-1/2 translate-y-1/2 animate-bounce"
        />
      </main>
    </>
  );
};

export default PhonePage;
