"use client";
import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cardData } from "@/data/livingRoomData";

const LivingRoom: React.FC = () => {
  const router = useRouter();

  const handleMoreDetails = (slug: string) => {
    router.push(`/interiors-faculty/${slug}`);
  };

  const livingRoom = cardData.filter(card => card.id >= 1 && card.id <= 6);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
          Living Room
        </SubHeading>
        <Paragraph className="text-center py-5 w-full md:w-[500px] flex mx-auto">
          You can choose your favorite room from here. We can build your dream
          room at a minimum cost.
        </Paragraph>
        <Carousel>
          <CarouselContent>
            {livingRoom?.map((card) => (
              <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3" key={card.id}>
                <div className="border p-3 shadow-md mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 h-full flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="Living Room"
                    className="rounded-md h-[200px] object-cover"
                  />
                  <h3 className="text-base text-gray-600 font-bold mt-3">
                    {card.title}
                  </h3>
                  <p className="py-2 text-sm">{card.des}</p>
                  <div className="flex justify-start w-full">
                    <button
                      type="button"
                      onClick={() => handleMoreDetails(card.slug)}
                      className="gap-2 text-center flex bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                    >
                      More Details
                    </button>
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

export default LivingRoom;