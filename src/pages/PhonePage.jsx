import React from "react";
import { motion, useInView } from "framer-motion";
import NotifyImg from "../assets/Notification.png";
import phoneImg from "../assets/Transparent iPhone 16 Pro Mockup (Titanium Black) (Mockuuups Studio).png";
import ideaImg from "../assets/idea box.png";

const PhonePage = () => {
  const notifyRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const ideaRef = React.useRef(null);

  const notifyInView = useInView(notifyRef, { once: true });
  const phoneInView = useInView(phoneRef, { once: true });
  const ideaInView = useInView(ideaRef, { once: true });

  return (
    <main className="flex flex-col items-center justify-center relative container mx-auto">
      <motion.img
        ref={notifyRef}
        src={NotifyImg}
        alt=""
        className="absolute left-1/4 top-40 w-40 md:w-40 lg:w-90 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
        initial={{ opacity: 0, y: -50 }}
        animate={notifyInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.img
        ref={phoneRef}
        src={phoneImg}
        alt=""
        className="w-70 md:w-1/2 lg:w-100"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={phoneInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.img
        ref={ideaRef}
        src={ideaImg}
        alt=""
        className="absolute w-40 md:w-40 lg:w-90 right-1/4 bottom-40 transform translate-x-1/2 translate-y-1/2 animate-bounce"
        initial={{ opacity: 0, y: 50 }}
        animate={ideaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </main>
  );
};

export default PhonePage;