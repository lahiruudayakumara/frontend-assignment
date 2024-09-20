import React from "react";
import { GripVertical, X } from "lucide-react";

interface StepItemProps {
  onClick: (item: { step: string }) => void;
  item: {
    step: string;
  };
  index: number;
  onClose: (item: { step: string }) => void;
}

const StepItemWithClose: React.FC<StepItemProps> = ({
  item,
  index,
  onClick,
  onClose,
}) => {
  return (
    <div
      key={index}
      className="items-center bg-slate-100 text-center p-3 w-full rounded-md cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="flex items-center justify-between">
        <GripVertical size={14} />
        <h1 className="text-slate-700 text-base font-semibold">{item.step}</h1>
        <button
          onClick={(event: React.MouseEvent) => {
            onClose(item);
            event.stopPropagation();
          }}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default StepItemWithClose;
