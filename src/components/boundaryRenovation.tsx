"use client"
import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";

import { useRouter } from 'next/navigation';
import { cardData } from '@/data/constractionFacalty'


const BoundaryRenovation: React.FC = () => {
  const router = useRouter()
  const handleMoreDetails = (slug:string) =>{
    router.push(`/construction-faculty/${slug}`)
  }

  const boundaryData = cardData.filter(card=> card.id >=41 && card.id <=46)

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className="">
          <div className="mb-4 sm:mb-0">
          <SubHeading className="text-center text-gray-600 font-bold uppercase">Boundary Renovation</SubHeading>
          <Paragraph className="text-center py-5 w-full md:w-[500px] flex mx-auto">You can choise your dream house from here. we can bulid your dream house at minimun cost </Paragraph>
          </div>
        </div>

        <Carousel>
        <CarouselContent>
          {boundaryData?.map((card)=>(
              <CarouselItem className="basis-full md:basis-1/3">
              <div className="border p-3 mb-2 shadow-md  rounded-lg hover:scale-[102%] transition translate duration-500  h-full flex flex-col">
                  <Image src={card.imageUrl as string} width={700} height={300} alt="village" className="rounded-md h-[200px] object-cover"/>
                  <h3 className=" text-gray-600 text-base font-semibold	 mt-3">{card.title}</h3>
                  <p className=" py-2 text-sm">{card.des}</p>
  
                  <div className="flex  justify-start  w-full">
                  <button
                    type="button"
                    className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                    onClick={()=> handleMoreDetails(card.slug)}
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

export default BoundaryRenovation;
