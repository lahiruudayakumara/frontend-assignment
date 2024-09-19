import React from "react";
import { CircleDot, GripVertical, X } from "lucide-react"; // Assuming you're using lucide-react for icons

interface StepItemProps {
  item: {
    step: string;
  };
  index: number;
}

const StepItemWithClose: React.FC<StepItemProps> = ({ item, index }) => {
  return (
    <div
      key={index}
      className="items-center bg-slate-100 text-center p-3 w-full rounded-md"
    >
      <div className="flex items-center justify-between">
        <GripVertical size={14} />
        <h1 className="text-slate-700 text-base font-semibold">{item.step}</h1>
        <button><X size={14} /></button>
      </div>
    </div>
  );
};

export default StepItemWithClose;
