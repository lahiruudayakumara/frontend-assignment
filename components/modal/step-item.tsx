import React from 'react';
import { Circle, CircleDot } from 'lucide-react'; // Assuming you're using lucide-react for icons

interface Props {
  item: {
    step: string;
  };
  index: number;
  active: boolean;
  select: (index: number) => void;
}

const StepItem: React.FC<Props> = ({ item, active, index, select }) => {
  return (
    <div
      key={index}
      onClick={() => select(index)}
      className="items-center cursor-pointer bg-slate-100 text-center p-3 w-full rounded-md"
    >
      <div className="flex items-center justify-between">
        {active ? <CircleDot size={12} /> : <Circle size={12} />}
        <h1 className="text-slate-800 text-base font-semibold">
          {item.step}
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default StepItem;
