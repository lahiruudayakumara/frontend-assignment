"use client";

import React, { useState } from "react";
import ContentSteps from "@/components/modal/content-steps";
import SelectOption from "@/components/modal/select-option";
import { AlignLeft, Box, ChevronRight, Settings } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { formName } = useParams();
  const router = useRouter();
  const [mobileNav, setMobileNav] = useState<boolean>(true);

  const navigateToDashboard = () => {
    router.push("/dashboard");
  }

  return (
    <>
      <div className="flex flex-row h-screen p-4 gap-4">
        <div onClick={() => setMobileNav(!mobileNav)} className="z-20 fixed p-2 bg-slate-100 rounded-md sm:hidden shadow-md">
          <AlignLeft />
        </div>
        <div className={`${mobileNav ? 'hidden' : 'z-10 fixed'} bg-white sm:block md:w-1/4 h-full p-4`}>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Box />
              <h1
                className="text-lg font-bold mx-2 cursor-pointer"
                onClick={navigateToDashboard}
              >
                Dashboard
              </h1>
              <ChevronRight />
              <h1 className="text-lg font-bold mx-2">
                {decodeURIComponent(formName.toString())}
              </h1>
            </div>
            <button>
              <Settings />
            </button>
          </div>
          <SelectOption />
          <ContentSteps />
        </div>
        <div className="sm:w-3/4 p-4 px-8 h-auto border shadow-lg rounded-xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
