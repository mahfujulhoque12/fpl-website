import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import Banner from "/public/ex.png";

const Experience: React.FC = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className="w-full py-4">
          <div>
            <Image
              src={Banner}
              className="rounded-md"
              alt="Banner-Img"
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
