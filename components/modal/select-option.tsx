"use client";

import React, { useState } from "react";

interface ISelectOption {
  name: string;
  active: boolean;
}

const SelectOption = () => {
  const [list, setList] = useState<ISelectOption[]>([
    { name: "Content", active: true },
    { name: "Design", active: false },
    { name: "Shares", active: false },
    { name: "Replies", active: false },
  ]);

  const handleClick = (index: number) => {
    const updatedList = list.map((item, idx) => ({
      ...item,
      active: idx === index,
    }));
    setList(updatedList);
  };

  return (
    <div className="p-1 bg-slate-200 my-6 rounded-md">
      <div className="flex gap-2 justify-between">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`text-center gap-2 p-2 rounded-md ${
              item.active ? "bg-white" : ""
            } hover:bg-slate-50 cursor-pointer w-full transition duration-300 ease-in-out `}
          >
            <h1 className={`text-sm font-semibold`}>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
