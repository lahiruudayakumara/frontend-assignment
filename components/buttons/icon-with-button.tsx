import React from "react";
import * as Icons from "lucide-react"; // Import all icons from lucide-react

interface Props {
    label: string;
    icon: keyof typeof Icons; // Type the icon prop to be one of the available icons
    align?: "left" | "center" | "right";
    onClick: () => void;
}

const IconWithButton: React.FC<Props> = ({ label, icon, onClick, align = "left" }) => {
    const IconComponent = Icons[icon] as React.ElementType;

    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 p-1 px-2 bg-white hover:bg-slate-50 cursor-pointer my-4 border border-slate-300 rounded-md ${align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""}`}
        >
            {/* Check if the IconComponent exists before rendering it */}
            {IconComponent && <IconComponent className="w-4 h-4" />}
            <h1 className="text-sm font-semibold">{label}</h1>
        </button>
    );
};

export default IconWithButton;
