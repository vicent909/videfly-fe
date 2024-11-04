"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  AddLogo,
  AIIcon,
  AIIconActive,
  AvatarsIcon,
  AvatarsIconActive,
  BrandKitIcon,
  BrandKitIconActive,
  CalendarIcon,
  CalendarIconActive,
  Home,
  HomeActive,
  Logo,
  LogoutIcon,
  NotificationIcon,
  ProyekIcon,
  ProyekIconActive,
  Setting,
  SettingActive,
} from "@/assets";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SideBar() {
  const [active, setActive] = useState("home");
  return (
    <div className="w-full h-screen lg:border-r-2 sticky top-0 shrink-0 overflow-hidden scrollbar-hide">
      <div className="flex flex-col px-4 py-5 justify-between h-full overflow-scroll">
        <div>
          <div className="flex justify-center mb-9">
            <Image alt="Logo" src={Logo} />
          </div>
          <div className="flex items-center justify-between mb-9 lg:hidden">
            <div className="flex items-center gap-2">
              <img
                alt="image profile"
                className="h-9 w-9 rounded-full"
                src={
                  "https://s3-alpha-sig.figma.com/img/f517/b4ae/8bc01705db24818a0614f477daff407d?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hmOUjR4fkECnTpFdiYss222~HQBbn82WRxrf6egbDtOkzs1jRWlcMuY4dI2ssAyW4~SN3rxFdcp~HFgnQwCwa6EDwgP7j7AXXWtbeSBDHd1rA3h8~8XA-4G724Uf7zhqELzkHabinEFiiWNumt7sEnW81T1~MLes-60bfxyk0zTOekMWBInN0Qx8JwHbmOjxug31adUSrY8qu4U0i8qNBrE94SbYbs1ip~asYYSdWJzDNyI0DplaWFSOsiKPX5-i5A2o21YGD3otZPxqR5ANLwNG3vVza1Bwff~jMvvw5vDJU41xP9e2BCLmfqyNppT9QkkrXfWYoopDfYWX9tf8XA__"
                }
              />
              <p className="pr-1">Dewi Anjani</p>
            </div>
            <NotificationIcon className="hover:bg-bg-notif-hover rounded-xl" />
          </div>
          <div className="flex justify-center w-full mb-9">
            <Button className="bg-bg-main text-white btn-main w-full font-semibold">
              Buat Video
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <AddLogo className="AddLogo stroke-white stroke-2" />
              </motion.div>
            </Button>
          </div>
          <div className="flex flex-col gap-1">
            <Link href={"/"}>
              <div
                className={`flex transition ease cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary ${
                  active === "home"
                    ? "bg-bg-secondary text-text-secondary font-semibold"
                    : ""
                }`}
                onClick={() => setActive("home")}
              >
                {active === "home" ? (
                  <HomeActive className="flex-shrink-0" />
                ) : (
                  <Home className="flex-shrink-0" />
                )}
                <p>Beranda</p>
              </div>
            </Link>
            <div
              onClick={() => {
                setActive("konten");
                console.log("aa");
              }}
              className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary ${
                active === "konten"
                  ? "bg-bg-secondary text-text-secondary font-semibold"
                  : ""
              }`}
            >
              {active === "konten" ? (
                <CalendarIconActive className="flex-shrink-0" />
              ) : (
                <CalendarIcon className="flex-shrink-0" />
              )}
              <p>Kelola Konten</p>
            </div>
            <div
              onClick={() => setActive("proyek")}
              className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary ${
                active === "proyek"
                  ? "bg-bg-secondary text-text-secondary font-semibold"
                  : ""
              }`}
            >
              {active === "proyek" ? (
                <ProyekIconActive className="flex-shrink-0" />
              ) : (
                <ProyekIcon className="flex-shrink-0" />
              )}
              <p>Proyek</p>
            </div>
            <div
              onClick={() => setActive("ai")}
              className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary ${
                active === "ai"
                  ? "bg-bg-secondary text-text-secondary font-semibold"
                  : ""
              }`}
            >
              {active === "ai" ? (
                <AIIconActive className="flex-shrink-0" />
              ) : (
                <AIIcon className="flex-shrink-0" />
              )}
              <p>AI Tools</p>
            </div>
            <div
              onClick={() => setActive("avatars")}
              className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary ${
                active === "avatars"
                  ? "bg-bg-secondary text-text-secondary font-semibold"
                  : ""
              }`}
            >
              {active === "avatars" ? (
                <AvatarsIconActive className="flex-shrink-0" />
              ) : (
                <AvatarsIcon className="flex-shrink-0" />
              )}
              <p>Avatars</p>
            </div>
            <div
              onClick={() => setActive("brand")}
              className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary ${
                active === "brand"
                  ? "bg-bg-secondary text-text-secondary font-semibold"
                  : ""
              }`}
            >
              {active === "brand" ? (
                <BrandKitIconActive className="flex-shrink-0" />
              ) : (
                <BrandKitIcon className="flex-shrink-0" />
              )}
              <p>Brand Kit</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 py-4 lg:hidden">
          <p className="text-text-orange font-semibold">5 Credits left</p>
          <motion.div
            animate={{
              backgroundImage: [
                "linear-gradient(135deg, #f27121, #EE5938)", // Color 1
                "linear-gradient(135deg, #E94057, #af3e9c)", // Color 2
                "linear-gradient(135deg, #43cea2, #185a9d)", // Color 3
                "linear-gradient(135deg, #703be7, #f27121)", // Back to Color 1
                "linear-gradient(135deg, #f27121, #f27121)", // Back to Color 1
              ],
            }}
            transition={{
              duration: 8, // Control the duration of the animation
              ease: "linear",
              repeat: Infinity, // Repeat infinitely
              repeatType: "loop",
            }}
            className="bg-gradient-to-r from-text-orange from-20% to-bg-main to-100% py-2 px-4 rounded-xl cursor-pointer text-white font-semibold hover:scale-x-95"
          >
            Upgrade plan
          </motion.div>
        </div>
        <div className="flex flex-col gap-1">
          <div
            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary ${
              active === "setting"
                ? "bg-bg-secondary text-text-secondary font-semibold"
                : ""
            }`}
            onClick={() => setActive("setting")}
          >
            {active === "setting" ? (
              <SettingActive className="flex-shrink-0" />
            ) : (
              <Setting className="flex-shrink-0" />
            )}
            <p>Pengaturan</p>
          </div>
          <div
            onClick={() => alert("logout")}
            className={`flex cursor-pointer w-full nav-logout gap-3 px-4 py-3 rounded-xl hover:bg-hover-logout`}
          >
            <LogoutIcon />
            <p className="text-text-logout">Keluar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
