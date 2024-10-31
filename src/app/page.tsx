import React from "react";
import ShopCard from "@/components/shopCard";
import ProductsVideo from "@/components/productsVideo";
import Estimate from "@/components/estimate";
import InteriorDesigns from "@/components/interiorDesigns";
import Expreence from "@/components/expreence";
import Review from "@/components/review";
import GlimpseHomes from "@/components/glimpseHomes";

import HeroSlider from "@/components/section/HeroSlider";
import InteriorDesignGallery from "@/components/section/InteriorDesignGallery";
import FaqAccordion from "@/components/faq/FaqAccordion";
import CallToAction from "@/components/CallToAction";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function Home() {
  return (
    <>
      <main>
        <HeroSlider />
        <InteriorDesignGallery />
        <InteriorDesigns />
        <ShopCard />
        <ProductsVideo/>
        {/* <WhyChoseUs /> */}
        <Estimate />
        <Expreence />
        <Review />
        <GlimpseHomes />
        {/* <ImageCarousel /> */}
        <FaqAccordion />
        <CallToAction />
      </main>
    </>
  );
}
