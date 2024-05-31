"use client";

import { useRef, useEffect } from "react";

// export const heroAnimation = [
//   {
//     class:
//       "transition-transform duration-[350ms] ease text-[40px] hover:translate-x-[-80%] hover:translate-y-[60%] hover:rotate-[8deg] text-white",
//   },
// ];

const rand = (min: any, max: any) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const Hero = () => {
  const containerRef: any = useRef(null);
  const containerRef1: any = useRef(null);
  const containerRef2: any = useRef(null);
  const containerRef3: any = useRef(null);

  useEffect(() => {
    const text = [
      "@",
      "9",
      "7",
      "6",
      "--",
      "8",
      "8",
      "1",
      "8",
      "5",
      "9",
      "8",
      "5",
    ];

    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear the container before adding new elements

      text.forEach((value, index) => {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.innerText = value;
        // letter.style.animationDelay = `${index * 100}ms`; // Adjust animation delay as needed

        containerRef.current.appendChild(letter);
      });
    }
  }, []);

  useEffect(() => {
    const text = ["->", "E", "M", "A", "I", "L"];

    if (containerRef1.current) {
      containerRef1.current.innerHTML = ""; // Clear the container before adding new elements

      text.forEach((value, index) => {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.innerText = value;
        // letter.style.animationDelay = `${index * 100}ms`; // Adjust animation delay as needed

        containerRef1.current.appendChild(letter);
      });
    }
  }, []);
  useEffect(() => {
    const text = ["->", "I", "N", "S", "T", "A"];

    if (containerRef2.current) {
      containerRef2.current.innerHTML = ""; // Clear the container before adding new elements

      text.forEach((value, index) => {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.innerText = value;
        // letter.style.animationDelay = `${index * 100}ms`; // Adjust animation delay as needed

        containerRef2.current.appendChild(letter);
      });
    }
  }, []);
  useEffect(() => {
    const text = ["<", "G", "I", "T", "H", "U", "B", "/", ">"];

    if (containerRef3.current) {
      containerRef3.current.innerHTML = ""; // Clear the container before adding new elements

      text.forEach((value, index) => {
        const letter = document.createElement("span");
        letter.className = "letter";
        letter.innerText = value;
        // letter.style.animationDelay = `${index * 100}ms`; // Adjust animation delay as needed

        containerRef3.current.appendChild(letter);
      });
    }
  }, []);

  return (
    <div className="animate-jump-in">
      <div id="text">
        <div id="text">
          <div className="line">
            <p className="word">MERN</p>
            <p className="word">STACK</p>
          </div>

          <div className="line">
            <p className="word">DEVELOPER</p>
            <p className="word">&</p>
          </div>

          <div className="flex gap-5">
            {" "}
            <div className="line">
              <a
                id="channel-link"
                href="https://www.gmail.com/"
                target="_blank"
                className="word fancy"
                ref={containerRef1}
              ></a>
            </div>
            <div className="line">
              <a
                id="channel-link"
                href="https://www.instagram.com/yesoke_snw/"
                target="_blank"
                className="word fancy"
                ref={containerRef2}
              ></a>
            </div>
          </div>
          <div className="line">
            <a
              id="channel-link"
              href="https://www.instagram.com/yesoke_snw/"
              target="_blank"
              className="word fancy"
              ref={containerRef}
            ></a>
          </div>
          <div className="line flex justify-center items-center">
            <a
              id="channel-link"
              href="https://github.com/Amgalanbaatar888"
              target="_blank"
              className="word fancy"
              ref={containerRef3}
            ></a>
            <p className="word">&</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
