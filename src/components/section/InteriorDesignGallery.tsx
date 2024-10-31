import InteriorDesignCard from "@/components/card/InteriorDesignCard";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import SubHeading from "../typography/SubHeading";
import Paragraph from "../typography/Paragraph";

import image3 from "/public/facalty/int.png";
import image4 from "/public/facalty/furniture.png";
import image5 from "/public/facalty/others.png";
import image2 from "/public/facalty/cons.png";


const InteriorDesignGallery = () => {
  const designs = [
    {
      imageSrc: image3.src,
      caption:"Interiors Faculty",
      title: "Modern Living Room",
      description:
        "A cozy design that incorporates natural elements, featuring earthy tones and wooden accents.",
        href:"/interiors-faculty",

    },
    {
      imageSrc: image2.src,
      caption:"Construction Faculty",
      title: "Rustic Bedroom",
      description:
        "A cozy design that incorporates natural elements, featuring earthy tones and wooden accents.",
        href:"/construction-faculty",
    },
    {
      imageSrc: image4.src,
      caption:"Furniture Faculty",
      title: "Elegant Dining Room",
      description:
        "A cozy design that incorporates natural elements, featuring earthy tones and wooden accents.",
        href:"#"
    },
    {
      imageSrc: image5.src,
      caption:"Others Faculty",
      title: "Chic Home Office",
      description:
        "A cozy design that incorporates natural elements, featuring earthy tones and wooden accents.",
        href:"#",
    },
  ];

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className="text-center">
          <SubHeading className="mb-3 md:mb-5 font-bold uppercase text-gray-700">
            Your Ultimate Destination for Interior Design
          </SubHeading>
          <Paragraph className="mb-3 md:mb-5 text-start w-full md:w-[65%] mx-auto text-gray-500">
            Whether you are looking for complete interior solutions, stylish
            renovations, or custom modular designs, we’ve got everything you
            need for your home or office. Explore our extensive collection of
            furniture and decor, and let us support you every step of the way!
          </Paragraph>
        </div>
        <div className="grid grid-cols-1 rounded-md sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
          {designs.map((design, index) => (
            <InteriorDesignCard
              key={index}
              imageSrc={design.imageSrc}
              caption={design.caption}
              title={design.title}
              description={design.description}
              href={design.href}
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default InteriorDesignGallery;