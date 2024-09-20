"use client";

import { useWelcome } from "@/context/welcome-screen-context";
import { CornerDownLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  const { title, description, text, imageUrl, align } = useWelcome();

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
          {title}
        </motion.h1>
        <motion.h3
          className="text-3xl font-semibold"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          {description}
        </motion.h3>
        <motion.p
          className="text-xl font-bold"
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4 }}
        >
          {text}
        </motion.p>
        <div className="flex gap-2 items-center">
          <motion.button
            className="p-2 bg-black text-white px-8 rounded-lg"
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3 }}
          >
            Start
          </motion.button>
          <motion.div
            className="flex gap-2 items-center"
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3 }}
          >
            <p>Press Enter</p>
            <CornerDownLeft />
          </motion.div>
        </div>
      </div>
      <div className={`flex flex-col ${align} ml-10 w-1/2`}>
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          <Image src={imageUrl} width={350} height={350} alt="logo" />
        </motion.div>
      </div>
    </div>
  );
}
