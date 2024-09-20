"use client";

import {
  X,
  Mail,
  ChevronDown,
  Phone,
  Check,
  Pencil,
  FilePenLine,
  Info,
  BookText,
  Earth,
} from "lucide-react";
import React from "react";

interface AddFieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddField: (newField: string) => void;
}

const AddFieldModal: React.FC<AddFieldModalProps> = ({ isOpen, onClose, onAddField }) => {
  const list = [
    { name: "Multiple Choice", icon: <Check size={16} /> },
    { name: "Short Text", icon: <Pencil size={16} /> },
    { name: "Email", icon: <Mail size={16} /> },
    { name: "Dropdown", icon: <ChevronDown size={16} /> },
    { name: "Phone Number", icon: <Phone size={16} /> },
    { name: "Section", icon: <FilePenLine size={16} /> },
    { name: "Contact Information", icon: <Info size={16} /> },
    { name: "Legal", icon: <BookText size={16} /> },
    { name: "Country", icon: <Earth size={16} /> },
  ];

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white shadow-md p-6 rounded-md"
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">Add Field</h1>
          <button onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 py-4">
          {list.map((item, index) => (
            <div
              onClick={() => onAddField(item.name)}
              key={index}
              className="p-2 border hover:bg-slate-100 rounded flex items-center space-x-2  cursor-pointer"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddFieldModal;
