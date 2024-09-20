"use client";

import { useState, useEffect } from "react";

interface Props {
  label?: string;
  value: boolean;
  onChange?: (newValue: boolean) => void;
  disable: boolean;
}

const ToggleButton: React.FC<Props> = ({ label, value, onChange, disable }) => {
  const [isToggled, setIsToggled] = useState(value);

  useEffect(() => {
    setIsToggled(value);
  }, [value]);

  const handleToggle = () => {
    const newValue = !isToggled;
    if (disable) {
      setIsToggled(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <div className="flex items-center justify-between py-2">
      {label && (
        <label className="text-base font-semibold text-slate-800">
          {label}
        </label>
      )}
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition duration-300 ${
          isToggled ? "bg-black" : "bg-gray-400"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
            isToggled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleButton;
