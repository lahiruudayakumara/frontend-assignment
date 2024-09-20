"use client";

import { useWelcome } from "@/context/welcome-screen-context";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Email() {
  const { emailTitle, emailDescription, email, setEmail } = useWelcome();

  const fadeUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col gap-4">
        <motion.h1
          className="text-xl font-bold flex items-center justify-start gap-2"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          1 <ArrowRight size={18} /> {emailTitle}
        </motion.h1>
        <motion.h3
          className="text-xl font-semibold"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          {emailDescription}
        </motion.h3>
        <input
            type="text"
            className="outline-none border-b-2 border-black w-full p-2 font-semibold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type here..."
          />
      </div>
    </div>
  );
}
