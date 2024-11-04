import { DownChevron } from "@/assets";
import React, { useState } from "react";
import { motion } from "framer-motion";

export interface selected {
    title: string,
    style: string
}

export default function DropdownComponent({ title, data, selected, onClick }: { title: string, data: selected[], selected: selected, onClick: (args: selected) => void }) {
  const [heading, setHeading] = useState(false);
  return (
    <div>
      <div
        className="bg-bg-secondary flex w-[284px] h-[40px] items-center rounded-xl py-2 px-4 gap-3 cursor-pointer"
        onClick={() => setHeading(!heading)}
      >
        <p
          className={`w-full h-full text-text-gray-2 ${
            selected.style ? selected.style : ""
          }`}
        >
          {selected.title ? selected.title : title}
        </p>
        <DownChevron />
      </div>
      {heading && (
        <motion.div
          className="mt-1 absolute bg-bg-secondary w-[284px] h-[180px] items-center rounded-xl p-4 gap-3 overflow-scroll scrollbar-hide"
          initial={{ height: 0 }}
          animate={{ height: heading ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col">
            {data.map((e, i) => {
              return (
                <p
                  className={`${e.style} py-3 px-4 rounded-xl hover:bg-text-secondary`}
                  key={i}
                  onClick={() => {
                      setHeading(false);
                      onClick(e);
                  }}
                >
                  {e.title}
                </p>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
