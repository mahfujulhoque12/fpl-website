"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { IoIosArrowForward } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa6";
import SubHeading from "./typography/SubHeading";
import Link from "next/link";

type CardData = {
  id: number;
  imageUrl: string;
  des: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: "/review/review1.png",
    des: "I recently purchased a sofa from [Furniture Store Name], and I'm beyond impressed with both the product and the service! The quality of the furniture is exceptional, and it perfectly complements my living room décor. The materials feel durable and luxurious, and the craftsmanship is top-notch.",
  },
  {
    id: 2,
    imageUrl: "/review/review2.png",
    des: "I recently purchased a sofa from [Furniture Store Name], and I'm beyond impressed with both the product and the service! The quality of the furniture is exceptional, and it perfectly complements my living room décor. The materials feel durable and luxurious, and the craftsmanship is top-notch.",
  },
  {
    id: 3,
    imageUrl: "/review/review3.png",
    des: "I recently purchased a sofa from [Furniture Store Name], and I'm beyond impressed with both the product and the service! The quality of the furniture is exceptional, and it perfectly complements my living room décor. The materials feel durable and luxurious, and the craftsmanship is top-notch.",
  },
  {
    id: 4,
    imageUrl: "/review/review4.png",
    des: "I recently purchased a sofa from [Furniture Store Name], and I'm beyond impressed with both the product and the service! The quality of the furniture is exceptional, and it perfectly complements my living room décor. The materials feel durable and luxurious, and the craftsmanship is top-notch.",
  },
  {
    id: 5,
    imageUrl: "/review/review5.png",
    des: "I recently purchased a sofa from [Furniture Store Name], and I'm beyond impressed with both the product and the service! The quality of the furniture is exceptional, and it perfectly complements my living room décor. The materials feel durable and luxurious, and the craftsmanship is top-notch.",
  },
];

const Review: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleReadMore = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <SubHeading className="text-gray-700 font-bold uppercase">
            Check out some of our customer reviews
          </SubHeading>
          <Link href ="others-faculty"
            className="font-medium text-red-400 flex items-center gap-2"
          >
            View All <IoIosArrowForward />
          </Link>
        </div>

        <Carousel className="mt-20">
          <CarouselContent className="">
            {cardData.map((card) => (
              <CarouselItem key={card.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div
                  className="relative shadow-sm p-6 border rounded-lg hover:shadow-md transition-shadow duration-300 bg-cover bg-center bg-no-repeat mb-2"
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                  }}
                >
             
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg z-0" />

          
                  <div className="relative p-4 rounded-md z-10">
                    <div className="flex justify-center text-yellow-400 gap-2 text-xl">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <p className="pt-2 text-start text-sm sm:text-base text-white">
                      {expandedCard === card.id
                        ? card.des
                        : `${card.des.substring(0, 140)}...`}
                      <button
                        onClick={() => toggleReadMore(card.id)}
                        className="text-red-200 font-medium ms-2"
                      >
                        {expandedCard === card.id ? "Show Less" : "Read More"}
                      </button>
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default Review;
