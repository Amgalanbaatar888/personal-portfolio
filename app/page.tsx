"use client";
import { useRef } from "react";
import { Hero } from "./components/Hero";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Intro } from "./components/Intro";

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
          className="flex sticky top-32 text-white justify-center  mt-32 items-center  "
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
            className="w-[1050px]  mt-5 left-[159px] h-[130px]"
          >
            <img src="./images/pen2.png" alt="pen2" />
          </motion.div>
        </div>
      </div>
      <h1 className="text-white text-3xl font-space">Hello HI OK ok no zxcv</h1>
      <h1 className="text-white text-3xl font-space font-[700]">
        Hello HI OK ok no zxcv
      </h1>
      {/* <Intro /> */}
    </>
  );
}
