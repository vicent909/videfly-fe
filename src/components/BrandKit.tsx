import { Download, Edit, Etc, LogoBoa } from "@/assets";
import Image from "next/image";
import React from "react";

export default function BrandKit({onDownloadClick}: {onDownloadClick: () => void}) {
  return (
    <div className="w-[220px] h-[128px] flex flex-col justify-between">
      <div className="h-[96px] w-full border-1 border-bg-border rounded-xl px-6 py-3 flex items-center gap-4">
        <Image alt="logo" src={LogoBoa} className="flex-shrink-0" />
        <div className="flex flex-col h-full w-full gap-1 overflow-hidden">
          <div className="flex items-center w-auto">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis font-semibold text-sm">
              Beauty of Angel
            </p>
          </div>
          <div className="bg-bg-secondary w-fit rounded-lg p-1 flex h-full rotate-180">
            <div
              className="rounded-full h-full aspect-square -mr-1.5"
              style={{ backgroundColor: "black" }}
            />
            <div
              className="rounded-full aspect-square -mr-1.5"
              style={{ backgroundColor: "white" }}
            />
            <div
              className="rounded-full aspect-square"
              style={{ backgroundColor: "black" }}
            />
          </div>
          <div className="flex items-center gap-1">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis text-xs text-text-gray">
              Skincare Product
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="bg-text-gray w-fit p-1 rounded-md cursor-pointer"> 
            <Edit />
        </div>
        <div className="bg-text-gray w-fit p-1 rounded-md cursor-pointer" onClick={() => onDownloadClick()}> 
            <Download />
        </div>
        <div className="bg-text-gray w-fit p-1 rounded-md cursor-pointer"> 
            <Etc />
        </div>
      </div>
    </div>
  );
}
