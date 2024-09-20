import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import React from "react";

interface Props {
  setValue: (value: string) => void;
}

const Placment: React.FC<Props> = ({ setValue }) => {
  const [selected, setSelected] = React.useState("left");

  const options = [
    { value: "items-start", icon: <AlignLeft size={16} /> },
    { value: "items-center", icon: <AlignCenter size={16} /> },
    { value: "place-items-end", icon: <AlignRight size={16} /> },
  ];

  const handleChange = (value: string) => {
    setSelected(value);
    setValue(value);
  };

  return (
    <div className="flex items-center">
      <label>Placment</label>
      <div className="ml-8 flex items-center gap-2">
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => handleChange(option.value)}
            className={`w-8 h-8 border flex items-center justify-center cursor-pointer rounded-md ${
              selected === option.value ? "bg-slate-50" : ""
            }`}
          >
            {option.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placment;
