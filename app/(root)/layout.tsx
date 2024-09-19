import ContentSteps from "@/components/modal/content-steps";
import SelectOption from "@/components/modal/select-option";
import { Box, ChevronRight, Settings } from "lucide-react";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row h-screen p-4 gap-4">
        <div className="w-1/4 h-auto p-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Box />
              <h1 className="text-lg font-bold mx-2">Dashboard</h1>
              <ChevronRight />
              <h1 className="text-lg font-bold mx-2">Demo Form</h1>
            </div>
            <button>
              <Settings />
            </button>
          </div>
          <SelectOption />
          <ContentSteps />
        </div>
        <div className="w-3/4 p-4 px-8 h-auto border shadow-lg rounded-xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
