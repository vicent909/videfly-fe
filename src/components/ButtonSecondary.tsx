import React from "react";
export default function ButtonSecondary({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <div
      className="flex bg-bg-secondary w-fit items-center px-4 rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <p className="text-text-dark">{title}</p>
    </div>
  );
}
