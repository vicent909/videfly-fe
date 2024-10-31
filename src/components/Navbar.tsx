import { NotificationIcon } from "@/assets";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-end px-10 py-2 gap-6">
      <div className="flex items-center gap-4">
        <p className="text-text-orange">Sisa 5 kredit</p>
        <Button className="bg-gradient-to-r from-text-orange from-35% to-bg-main text-white">Upgrade plan</Button>
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
  );
}
