"use client"

import SaveButton from "@/components/buttons/save-button";
import Header from "@/components/header/dashboard-header";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Dashboard() {

  return (
    <div className="">
      <Header />
      <div className="p-6">
        <div className="pb-4">
          <SaveButton label="Create" onClick={() => {}} />
        </div>
        <div className="flex gap-8">
          <Link href="/dashboard/Demo Project/home-screen">
            <motion.div
              className="bg-slate-100 shadow-md p-4 flex flex-col gap-4"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6 }}
            >
              <Image src="/image.png" alt="logo" width={300} height={300} />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold">Demo Project</h1>
                  <p className="text-xs">Created Date: 2024-01-01</p>
                  <p className="text-xs">Modefied: 4 hours ago</p>
                </div>
                <button className="p-2 bg-white rounded-md shadow-md">
                  <Trash2 color="red" />
                </button>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
