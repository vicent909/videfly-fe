"use client";
import React from "react";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";

export default function ButtonMain({
  name,
  onClick,
  isLoading = false,
}: {
  name: string;
  onClick: () => void;
  isLoading: boolean;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick()}
      className="h-[40px] w-[132px] lg:w-[144px] xl:w-[180px] cursor-pointer bg-bg-main text-white px-4 py-2 text-sm rounded-xl hover:bg-hover-main flex items-center justify-center"
    >
      {isLoading ? (
        <div className="text-center my-auto justify-center items-center flex">
          <Spinner size="sm" color="default" />
        </div>
      ) : (
        <p className="text-center">{name}</p>
      )}
    </motion.div>
  );
}
