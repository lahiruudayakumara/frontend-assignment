import React from "react";
import * as Icons from "lucide-react";

interface Props {
  label: string;
  icon?: keyof typeof Icons;
  align?: "left" | "center" | "right";
  onClick: () => void;
}

const DiscardButton: React.FC<Props> = ({
  label,
  icon,
  onClick,
  align = "left",
}) => {
  if (!icon) {
    return (
      <button
        onClick={onClick}
        className={`flex w-full text-center items-center justify-center gap-2 p-2 px-2 bg-white text-red-600  cursor-pointer my-4 hover:border hover:bg-slate-50 rounded-md ${
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        }`}
      >
        <h1 className="text-sm font-semibold">{label}</h1>
      </button>
    );
  }

  const IconComponent = Icons[icon] as React.ElementType;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 p-1 px-2 bg-white hover:bg-slate-50 cursor-pointer my-4 border border-slate-300 rounded-md ${
        align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
      }`}
    >
      {IconComponent && <IconComponent className="w-4 h-4" />}
      <h1 className="text-sm font-semibold">{label}</h1>
    </button>
  );
};

export default DiscardButton;
