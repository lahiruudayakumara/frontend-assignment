"use client";

import  { useWelcome } from "@/context/welcome-screen-context";
import { CornerDownLeft } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const { title, description, text, imageUrl } = useWelcome();

  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex flex-col gap-4 m-auto w-1/2">
        <h1 className="text-6xl font-bold">{title}</h1>
        <h3 className="text-3xl font-semibold">{description}</h3>
        <p>{text}</p>
        <div className="flex gap-2 items-center">
          <button className="p-2 bg-black text-white px-8 rounded-lg">Start</button>
          <div className="flex gap-2 items-center">
            <p>Press Enter</p>
            <CornerDownLeft />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <Image src={imageUrl} width={350} height={350} alt="logo" />
      </div>
    </div>
  );
}
