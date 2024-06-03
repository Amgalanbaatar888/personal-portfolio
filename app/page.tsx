"use client";

import { useRef } from "react";
import { Hero } from "./components/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Intro } from "./components/Intro";
import React from "react";
import ReactTilt from "react-tilt";
import { Project1 } from "./components/projects/Project1";
import { Project2 } from "./components/projects/Project2";

export default function Home() {
  const router = useRouter();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: any = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

  const x2 = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);

  return (
    <>
      <Hero />
      <div className="w-full h-[10000px] relative ">
        <div
          ref={targetRef}
          className="flex sticky top-0 text-white justify-center  mt-32 items-center  "
        >
          <motion.div
            style={{ x }}
            className="w-[406px] absolute mt-5 left-[159px] h-[130px]"
          >
            <img
              onClick={() => router.push("/")}
              src="./images/pen3.png"
              alt="pen"
            />
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="w-[1040px]  mt-5 left-[159px] h-[130px]"
          >
            <img src="./images/pen2.png" alt="pen2" />
          </motion.div>
        </div>
        <Intro />
        <Project1 />
        <Project2 />
      </div>
    </>
  );
}
