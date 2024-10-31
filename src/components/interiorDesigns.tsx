"use client"
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { IoIosArrowForward } from "react-icons/io";
import Slider1 from "/public/slide/slide1.png";
import Slider2 from "/public/slide/slide12.png";
import Slider3 from"/public/slide/slide2.png";
import Slider4 from "/public/slide/slide11.png";
import Slider5 from "/public/slide/slide3.png";
import Slider6 from "/public/slide/slide7.png";
import Slider7 from"/public/slide/slide4.png";
import Slider8 from "/public/slide/slide9.png";
import Slider9 from "/public/slide/slide5.png";
import Slider10 from "/public/slide/slide8.png";
import Slider11 from"/public/slide/slide6.png";
import Slider12 from"/public/slide/slide7.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import { IoCloseCircleSharp } from "react-icons/io5";
import Link from "next/link";

// Modal Component
const Modal: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-4 max-w-[90%] max-h-[90%]">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-gray-600 font-bold text-lg"
        >
          <IoCloseCircleSharp className="text-red-500"/>
        </button>
        <Image src={src} alt="Selected image" width={800} height={600} className="rounded-lg w-[700px] h-[400px]" />
      </div>
    </div>
  );
};

const InteriorDesigns: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row justify-between mt-10">
          <div className="mb-4 sm:mb-0">
            <SubHeading className="py-3 uppercase font-bold text-gray-700">
              Inspiration for home interior designs
            </SubHeading>
            <Paragraph className="pb-3 text-gray-500">
              Give your home a new look with these interior design ideas curated for you
            </Paragraph>
          </div>
          <div>
            <Link href = "/interiors-faculty"
              className="font-medium text-red-400 flex items-center gap-2"
            >
              View All <IoIosArrowForward />
            </Link>
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <div className="" onClick={() => openModal(Slider1.src)}>
                  <Image
                    src={Slider1.src}
                    className="rounded-[5px] basis-full basis-1/2 h-[250px] sm:h-[350px] cursor-pointer object-cover"
                    width={600}
                    height={350}
                    alt="slider1"
                  />
                </div>
                <div className="basis-full md:basis-1/4" onClick={() => openModal(Slider2.src)}>
                  <Image
                    src={Slider2.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer "
                    width={300}
                    height={350}
                    alt="slider2"
                  />
                </div>
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(Slider3.src)}>
                  <Image
                    src={Slider3.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer  "
                    width={300}
                    height={350}
                    alt="slider3"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(Slider4.src)}>
                  <Image
                    src={Slider4.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer"
                    width={300}
                    height={350}
                    alt="slider4"
                  />
                </div>
                <div className="basis-full sm:basis-1/2" onClick={() => openModal(Slider5.src)}>
                  <Image
                    src={Slider5.src}
                    className="rounded-[5px] h-[250px] sm:h-[350px] cursor-pointer object-cover"
                    width={600}
                    height={350}
                    alt="slider5"
                  />
                </div>
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(Slider6.src)}>
                  <Image
                    src={Slider6.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer "
                    width={300}
                    height={350}
                    alt="slider6"
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <div className="basis-full sm:basis-1/2" onClick={() => openModal(Slider7.src)}>
                  <Image
                    src={Slider7.src}
                    className="rounded-[5px] h-[250px] sm:h-[350px] cursor-pointer object-cover"
                    width={600}
                    height={350}
                    alt="slider7"
                  />
                </div>
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(Slider8.src)}>
                  <Image
                    src={Slider8.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer "
                    width={300}
                    height={350}
                    alt="slider8"
                  />
                </div>
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(Slider9.src)}>
                  <Image
                    src={Slider9.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer "
                    width={300}
                    height={350}
                    alt="slider9"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(Slider10.src)}>
                  <Image
                    src={Slider10.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer "
                    width={300}
                    height={350}
                    alt="slider10"
                  />
                </div>
                <div className="basis-full sm:basis-1/2" onClick={() => openModal(Slider11.src)}>
                  <Image
                    src={Slider11.src}
                    className="rounded-[5px] h-[250px] sm:h-[350px] cursor-pointer object-cover"
                    width={600}
                    height={350}
                    alt="slider11"
                  />
                </div>
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(Slider12.src)}>
                  <Image
                    src={Slider12.src}
                    className="rounded-[5px] w-[500px] md:w-[300px] h-[250px] sm:h-[350px] cursor-pointer "
                    width={300}
                    height={350}
                    alt="slider12"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>


      {isModalOpen && <Modal src={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default InteriorDesigns;
