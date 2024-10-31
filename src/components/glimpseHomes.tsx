import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Trand from "/public/tranding/tranding.png";
import Trand2 from "/public/tranding/tranding2.png";
import Trand3 from "/public/tranding/tranding3.png";
import Link from "next/link";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";

type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  des: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: Trand.src,
    title: "False Ceiling Cost in Kolkata: Designs, Materials and Inspirations",
    des: " Anusha Kulal | September 20, 2024",
  },
  {
    id: 2,
    imageUrl: Trand2.src,
    title: "Beyond Royalty: Purple Two-Colour Combination for Bedroom Walls",
    des: " Anusha Kulal | September 20, 2024",
  },
  {
    id: 3,
    imageUrl: Trand3.src,
    title:
      "Stylish Storage: Beautiful Mirrored Wardrobes with Sliding Door Designs For You",
    des: " Maitreyee Chakraborti | September 20, 2024",
  },
];

const GlimpseHomes: React.FC = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className="flex flex-col  justify-between sm:flex-row">
          <div>
            <SubHeading className="pt-3 font-bold uppercase text-gray-700">
              Stay updated with trending home interior designs!
            </SubHeading>
            <Paragraph className="py-3 text-gray-500">
              Find everything from design fixes to expert tips on Livspace
              magazine
            </Paragraph>
          </div>
          <div>
            <Link href="/interiors-faculty"
              type="button"
              className="flex  font-medium text-red-400 items-center gap-2 pt-10"
            >
              See More <IoIosArrowForward />
            </Link>
          </div>
        </div>

        <div className="grid  grid-cols-1  sm:grid-cols-1 md:grid-cols-3 gap-3">
          {cardData.map((card) => (
            <div
              className="bg-white p-4 rounded-lg mt-4 transform translate hover:scale-[101%] duration-500 shadow-sm hover:shadow-md border"
              key={card.id}
            >
              <div>
                <Image
                  src={card.imageUrl}
                  alt="image"
                  width={600}
                  height={400}
                  className="rounded-md h-[300px] object-cover"
                />
                <h1 className="text-lg text-start py-2 font-semibold  text-gray-700">
                  {card.title}
                </h1>
                <p className="pb-3 text-gray-600"> {card.des}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default GlimpseHomes;
