"use client";
import { useRef } from "react";
import { Hero } from "./components/Hero";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress }: any = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

  const x2 = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);

  return (
    <>
      <Hero />
      <div className="w-full h-[1000px] relative">
        <div
          ref={targetRef}
          className="flex sticky top-0  text-white justify-center  mt-32 items-center  "
        >
          <motion.div
            style={{ x }}
            className="w-[406px] absolute bg-black mt-5 left-[159px] h-[130px]"
          >
            <img className="bg-slate-900" src="./images/pen1.png" alt="pen1" />
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="w-[1050px]  mt-5 left-[159px] h-[130px]"
          >
            <img src="./images/pen2.png" alt="pen2" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
