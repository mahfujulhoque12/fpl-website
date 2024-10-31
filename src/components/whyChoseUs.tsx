"use client";
import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import logo1 from "/public/c1.png";
import logo2 from "/public/c2.png";
import logo3 from "/public/c3.png";
import logo4 from "/public/c4.png";
import logo5 from "/public/c5.png";
import logo6 from "/public/c6.png";
import logo7 from "/public/c7.png";
import SubHeading from "./typography/SubHeading";

type CardData = {
  id: number;
  title: string;
  imageUrl: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "3 countries",
    imageUrl: logo1.src,
  },
  {
    id: 2,
    title: "Easy EMIs",
    imageUrl: logo2.src,
  },
  {
    id: 3,
    title: "45-day move-in guarantee²",
    imageUrl: logo3.src,
  },
  {
    id: 4,
    title: "146 quality checks",
    imageUrl: logo4.src,
  },
  {
    id: 5,
    title: "100,000+ happy homes",
    imageUrl: logo5.src,
  },
  {
    id: 6,
    title: "60+ cities",
    imageUrl: logo6.src,
  },
  {
    id: 7,
    title: "20 lakh+ catalogue products",
    imageUrl: logo7.src,
  },
];

const WhyChoseUs: React.FC = () => {
  const visibleCount = 4;
  const totalCards = cardData.length;
  const [startIndex, setStartIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExitingIndex(startIndex);
      setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [startIndex, totalCards]);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center  pb-10 text-gray-700">
          Why Choose Us
        </SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {Array.from({ length: visibleCount }).map((_, index) => {
            const cardIndex = (startIndex + index) % totalCards;
            const card = cardData[cardIndex];
            return (
              <div
                className={`shadow-md py-3 border px-4 bg-white rounded-[5px] 
                transition-transform duration-500 
                ${
                  exitingIndex ===
                  (startIndex + index - 1 + totalCards) % totalCards
                    ? "animate-exit"
                    : "animate-enter"
                }`}
                key={card.id}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="justify-center items-center flex">
                  <Image
                    src={card.imageUrl}
                    alt={`logo-${card.id}`}
                    width={80}
                    height={80}
                  />
                </div>
                <p className="text-center text-gray-500 mt-4 pb-5">
                  {card.title}
                </p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyChoseUs;
