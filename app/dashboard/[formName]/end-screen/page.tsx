"use client";

import { motion } from "framer-motion";

export default function WelcomeScreen() {
  const fadeUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex flex-col gap-4 m-auto w-1/2">
        <motion.h1
          className="text-6xl font-bold"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          End Screen
        </motion.h1>
        <motion.h3
          className="text-3xl font-semibold"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          This is the end of the form
        </motion.h3>
      </div>
    </div>
  );
}
