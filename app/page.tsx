"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const duration = 3000;
    const interval = 100;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [progress, router]);

  if (progress === 100) {
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="text-center">
        <h1 className="text-3xl text-black font-bold">Welcome!</h1>
        <p className="text-lg font-semibold">Login to your account</p>
      </div>
      <div className="w-72 h-6 border rounded-md">
        <div
          className="h-full bg-black rounded-md"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
