import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Link from "next/link";
import Shop1 from "/public/intorior/home1.png";
import Shop3 from "/public/intorior/home2.png";
import Shop2 from "/public/intorior/home3.png";
import Shop4 from "/public/intorior/home4.png";

import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";

type CardData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Modular Interiors",
    description: "Functional kitchen, wardrobe, and storage kitchen, wardrobe, and storage wardrobe, and storage",
    imageUrl: Shop1.src,
  },
  {
    id: 2,
    title: "Full Home Interiors",
    description: "Turnkey interior solutions for your home kitchen, wardrobe, and storage wardrobe, and storage",
    imageUrl: Shop2.src,
  },
  {
    id: 3,
    title: "Luxury Interiors",
    description: "Tailored interiors that redefine elegance kitchen, wardrobe, and storage wardrobe, and storage",
    imageUrl: Shop3.src,
  },
  {
    id: 4,
    title: "Renovations",
    description: "Expert solutions to upgrade your home kitchen, wardrobe, and storage,wardrobe, and storage",
    imageUrl: Shop4.src,
  },
];

const ShopCard: React.FC = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center uppercase font-bold py-3 text-gray-700">
          One-stop shop for all things interiors
        </SubHeading>

        <Paragraph className="text-center w-full md:w-[65%] mx-auto text-gray-500">
          Be it end-to-end interiors, renovation or modular solutions, we have
          it all for your home or office. With a wide range of furniture &
          decor, we have your back from start to finish.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 mb-5 rounded-md">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="group shadow-md border hover:shadow-sm hover:scale-[102%] rounded-[5px] overflow-hidden transition-translate duration-500"
            >
              <div  className="block">
                <div className="relative w-full h-64">
                  <Image
                    src={card.imageUrl}
                    alt="card1-img"
                    className="object-cover rounded-md "
                    fill
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-600">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 pt-1 pb-4">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ShopCard;
