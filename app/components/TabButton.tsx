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
        ? "bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white shadow-lg "
        : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
    }`}
  >
    {children}
  </button>
);
export default TabButton;
