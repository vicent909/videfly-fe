import { Paint } from "@/assets";
import React, { MouseEventHandler } from "react";

export default function ColorPickerComponent({title, color, onClick}: {title: string, color: string, onClick: MouseEventHandler}) {
  return (
    <div>
      <p className="text-text-gray">{title}</p>
      <div className="bg-bg-secondary flex w-[284px] h-[40px] items-center rounded-xl py-2 px-4 gap-3">
        <Paint />
        <div
          className={`w-full h-full rounded-md cursor-pointer`}
          style={{ backgroundColor: color }}
          onClick={onClick}
        ></div>
      </div>
    </div>
  );
}
