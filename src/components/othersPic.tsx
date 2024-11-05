"use client";
import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import other1 from "/public/others/others1.png";
import other2 from "/public/others/others2.png";
import other3 from "/public/others/others3.png";
import other4 from "/public/others/others4.png";
import other5 from "/public/others/others5.png";
import other6 from "/public/others/others6.png";
import other7 from "/public/others/others7.png";
import other8 from "/public/others/others8.png";
import other9 from "/public/others/others9.png";
import other10 from "/public/others/others10.png";
import other11 from "/public/others/others11.png";
import other12 from "/public/others/others12.png";
import other13 from "/public/others/others13.png";
import other14 from "/public/others/others14.png";
import Link from "next/link";

type CardData = {
  id: number;
  imageUrl: string;
  des: string;
};
const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: other1.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 2,
    imageUrl: other2.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 3,
    imageUrl: other3.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 4,
    imageUrl: other4.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 5,
    imageUrl: other5.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 6,
    imageUrl: other7.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 7,
    imageUrl: other6.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 8,
    imageUrl: other8.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 9,
    imageUrl: other9.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 10,
    imageUrl: other10.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 11,
    imageUrl: other11.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 12,
    imageUrl: other12.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 13,
    imageUrl: other13.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 14,
    imageUrl: other14.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
];

const OthersPic = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase mb-10">
          There are losts off sample here
        </SubHeading>
        <Carousel>
          <CarouselContent>
            {cardData?.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Link href="/cotesion">
                <div className="border p-4 shadow-md  mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 h-full flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="village"
                    className="rounded-md h-[200px] object-cover"
                  />
                  <p className="text-sm py-2">{card.des}</p>

                  <div className="flex  justify-start w-full"></div>
                </div>
                </Link>
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

export default OthersPic;
