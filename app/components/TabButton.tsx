import React from "react";

const TabButton = ({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 sm:px-8 py-3 rounded-xl font-medium transition-all ${
      isActive
        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
        : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
    }`}
  >
    {children}
  </button>
);
export default TabButton;
