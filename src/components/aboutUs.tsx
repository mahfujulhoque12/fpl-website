import about1 from "/public/about/about.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section>
      <div className="">
        <div className=""></div>

        <div className="w-full h-auto relative ">
          <Image
            src={about1.src}
            width={1500}
            height={600}
            alt="img"
            className="w-full h-[450px] object-cover"
            quality={100}
          />
          <div className="p-6  border rounded-md shadow-md absolute top-[100px] left-5 md:left-[25%] lg:left-[40%] right-0 z-20 bg-white w-[90%]  md:w-[400px]">
            <h3 className="text-2xl text-center md:text-start font-bold text-gray-600">
              About Us
            </h3>

            <p className="text-normal text-gray-500 mt-3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of . classical Latin literature from 45
              BC, making it over 2000 years old.
            </p>
            <div className="flex  justify-center md:justify-start w-full">
              <Link
                href="/cotesion"
                className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 mt-2 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
              >
                Get More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
