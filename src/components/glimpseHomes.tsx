"use client"
import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import { cardData } from "@/data/intoriorData";
import { useRouter } from "next/navigation";


const GlimpseHomes: React.FC = () => {
  const router = useRouter();

  const handleMoreDetails =  (slug: string) => {
   

    router.push(`/intorior/${slug}`);
  
  };
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
            <Link href=""
              
              className="flex  font-medium text-red-400 items-center gap-2 pt-10"
            >
              See More <IoIosArrowForward />
            </Link>
          </div>
        </div>

        <div className="grid  grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cardData.map((card) => (
            
            <div
              className="bg-white p-4 rounded-lg mt-4 transform translate hover:scale-[101%] duration-500 shadow-sm hover:shadow-md border"
              key={card.id}
            >
              <button type="button"
            onClick={()=>handleMoreDetails(card.slug)}
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
              </button>
            </div>
            
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default GlimpseHomes;
