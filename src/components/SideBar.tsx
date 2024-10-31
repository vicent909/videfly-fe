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
  ProyekIcon,
  ProyekIconActive,
  Setting,
  SettingActive,
} from "@/assets";

export default function SideBar() {
  const [active, setActive] = useState("home");
  return (
    <div className="w-full h-screen px-4 py-5 border-r-2">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center">
            <Image alt="Logo" src={Logo} />
          </div>
          <div className="flex justify-center w-full py-12">
            <Button className="bg-main text-white btn-main w-full">
              Buat Video
              <AddLogo className="AddLogo stroke-white stroke-2" />
            </Button>
          </div>
          <div className="flex flex-col gap-1">
            <div
              className={`flex cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-secondary ease-in anima ${
                active === "home" ? "bg-secondary text-secondary-text" : ""
              }`}
              onClick={() => setActive("home")}
            >
              {active === "home" ? <HomeActive /> : <Home />}
              <p>Beranda</p>
            </div>
            <div
              onClick={() => setActive("konten")}
              className={`flex cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-secondary ${
                active === "konten" ? "bg-secondary text-secondary-text" : ""
              }`}
            >
              {active === "konten" ? <CalendarIconActive /> : <CalendarIcon />}
              <p>Kelola Konten</p>
            </div>
            <div
              onClick={() => setActive("proyek")}
              className={`flex cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-secondary ${
                active === "proyek" ? "bg-secondary text-secondary-text" : ""
              }`}
            >
              {active === "proyek" ? <ProyekIconActive /> : <ProyekIcon />}
              <p>Proyek</p>
            </div>
            <div
              onClick={() => setActive("ai")}
              className={`flex cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-secondary ${
                active === "ai" ? "bg-secondary text-secondary-text" : ""
              }`}
            >
              {active === "ai" ? <AIIconActive /> : <AIIcon />}
              <p>AI Tools</p>
            </div>
            <div
              onClick={() => setActive("avatars")}
              className={`flex cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-secondary ${
                active === "avatars" ? "bg-secondary text-secondary-text" : ""
              }`}
            >
              {active === "avatars" ? <AvatarsIconActive /> : <AvatarsIcon />}
              <p>Avatars</p>
            </div>
            <div
              onClick={() => setActive('brand')}
              className={`flex cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-secondary ${
                active === "brand" ? "bg-secondary text-secondary-text" : ""
              }`}
            >
              {active === "brand" ? <BrandKitIconActive /> : <BrandKitIcon />}
              <p>Brand Kit</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div
            className={`flex cursor-pointer w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-secondary ${
              active === "setting" ? "bg-secondary text-secondary-text" : ""
            }`}
            onClick={() => setActive("setting")}
          >
            {active === "setting" ? <SettingActive /> : <Setting />}
            <p>Pengaturan</p>
          </div>
          <div
            onClick={() => alert("logout")}
            className={`flex cursor-pointer w-full nav-logout gap-3 px-4 py-3 rounded-xl hover:bg-logout-hover`}
          >
            <LogoutIcon />
            <p className="text-logout">Keluar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
