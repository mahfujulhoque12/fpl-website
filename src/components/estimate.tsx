"use client";
import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { useState, useEffect } from "react";
import Image from "next/image";
import es1 from "/public/fac1.png";
import es2 from "/public/duplexhouse/duplex1.png";
import es3 from "/public/bedroom/bed1.png";

import { motion, useAnimation } from "framer-motion";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import Link from "next/link";

type CardData = {
  id: number;
  title: string;
  des: string;
  imageUrl: string;
  href: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Interiors Faculty",
    des: "Know the estimate price for your full home interiors price for your full home interiors",
    imageUrl: es1.src,
    href: "/interiors-faculty",
  },
  {
    id: 2,
    title: "Construction Faculty",
    des: "Know the estimate price for your full home interiors",
    imageUrl: es2.src,
    href: "/construction-faculty",
  },
  {
    id: 3,
    title: "Furniture Faculty",
    des: "Know the estimate price for your full home interiors",
    imageUrl: es3.src,
    href: "#",
  },
];
const Estimate: React.FC = () => {
  const words = [
    "Interiors Faculty",
    "Construction Faculty",
    "Furniture Faculty",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        controls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [controls, words.length]);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className=" text-center font-bold uppercase py-3 text-gray-700">
          Get the estimate for your{" "}
          <motion.span
            animate={controls}
            className="inline-block text-[#cf4045]"
          >
            {words[currentIndex]}
          </motion.span>
        </SubHeading>
        <Paragraph className="text-center pb-3 text-gray-500">
          Calculate the approximate cost of doing up your home interiors
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-4  rounded-lg border shadow-md hover:scale-[102%] transform translate duration-500"
            >
              <div className="">
                <Image
                  src={card.imageUrl}
                  alt="es-1"
                  width={500}
                  height={400}
                  className="h-[300px] rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl mt-1 font-semibold  text-gray-700">
                {card.title}
              </h3>
              <p className="text-base  md:mb-0 py-1">{card.des}</p>
              <div className="flex  justify-start w-full">
                <Link
                  href={card.href}
                  className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                >
                  Get More Info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Estimate;
