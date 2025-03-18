"use client";

import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a23] bg-opacity-50 z-50 m-4">
      <div className="relative bg-gray-900 rounded-lg w-full max-w-lg mx-auto shadow-md shadow-orange-600">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-500 hover:text-orange-400 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
