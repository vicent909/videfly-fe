"use client";
import { LogoMini, NotificationIcon, ProyekIcon } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { motion, Variants } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };
  const overlayVariants: Variants = {
    open: { opacity: 1, pointerEvents: "auto" },
    closed: { opacity: 0, pointerEvents: "none" },
  };
  return (
    <div className="w-full flex items-center justify-between lg:justify-end p-4 lg:px-10 lg:py-2">
      <div className="lg:hidden flex items-center justify-between w-full z-50">
        <Image alt="logo-mini" src={LogoMini} />
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          variants={overlayVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
          onClick={() => setOpen(false)}
        />
        <motion.div
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50"
          variants={sidebarVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
        >
          <SideBar />
        </motion.div>
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          <ProyekIcon />
        </div>
      </div>
      <div className="hidden lg:flex gap-6">
        <div className="flex items-center gap-4">
          <p className="text-text-orange font-semibold">Sisa 5 kredit</p>
          <motion.div
            className="rounded-xl"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                backgroundImage: [
                  "linear-gradient(135deg, #f27121, #f27121)", 
                  "linear-gradient(135deg, #f27121, #EE5938)", 
                  "linear-gradient(135deg, #EE5938, #E94057)", 
                  "linear-gradient(135deg, #E94057, #af3e9c)", 
                  "linear-gradient(135deg, #af3e9c, #703Be7)", 
                  "linear-gradient(135deg, #703Be7, #f27121)",
                  "linear-gradient(135deg, #f27121, #f27121)",
                ],
              }}
              transition={{
                duration: 6, // Control the duration of the animation
                ease: "linear",
                repeat: Infinity, // Repeat infinitely
                repeatType: "loop",
              }}
              className="py-2 px-4 rounded-xl cursor-pointer text-white font-semibold"
            >
              Upgrade plan
            </motion.div>
          </motion.div>
        </div>
        <div className="flex items-center gap-2">
          <NotificationIcon className="hover:bg-bg-notif-hover rounded-xl" />
          <p className="pr-1">Dewi Anjani</p>
          <img
            alt="image profile"
            className="h-9 w-9 rounded-full"
            src={
              "https://s3-alpha-sig.figma.com/img/f517/b4ae/8bc01705db24818a0614f477daff407d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hmOUjR4fkECnTpFdiYss222~HQBbn82WRxrf6egbDtOkzs1jRWlcMuY4dI2ssAyW4~SN3rxFdcp~HFgnQwCwa6EDwgP7j7AXXWtbeSBDHd1rA3h8~8XA-4G724Uf7zhqELzkHabinEFiiWNumt7sEnW81T1~MLes-60bfxyk0zTOekMWBInN0Qx8JwHbmOjxug31adUSrY8qu4U0i8qNBrE94SbYbs1ip~asYYSdWJzDNyI0DplaWFSOsiKPX5-i5A2o21YGD3otZPxqR5ANLwNG3vVza1Bwff~jMvvw5vDJU41xP9e2BCLmfqyNppT9QkkrXfWYoopDfYWX9tf8XA__"
            }
          />
        </div>
      </div>
    </div>
  );
}
