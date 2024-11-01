"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ButtonMain({ name, onClick }: {name: string, onClick: Function}) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick()}
      className="w-fit cursor-pointer bg-bg-main text-white px-4 py-2 text-sm rounded-xl hover:bg-hover-main"
    >
      <p>{name}</p>
    </motion.div>
  );
}
