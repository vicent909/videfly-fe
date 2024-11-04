import React from "react";
import ImageDeleteBtn from "./ImageDeleteBtn";

export default function LogoComponent({type, image}: {type: string, image: string}) {
  return (
    <div className="w-[188px] h-[96px] flex flex-col items-center justify-center rounded-xl border-1 border-bg-border flex-shrink-0">
      <div className="flex">
        <div className={`w-12 aspect-square ${type === 'Cerah' ? 'bg-white' : 'bg-text-dark'} rounded-full`}>
          <img
            alt="logo-boa"
            src={image}
            className="h-full w-full border-2 border-bg-main rounded-full"
          />
        </div>
        <ImageDeleteBtn />
      </div>
      <p className="text-text-gray-2">Latar {type}</p>
    </div>
  );
}
