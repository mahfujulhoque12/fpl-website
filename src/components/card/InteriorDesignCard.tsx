import Image from "next/image";

import Link from "next/link";

const InteriorDesignCard = ({
  imageSrc,
  caption,
  title,
  description,
  href,
}: {
  imageSrc: string;
  caption: string;
  title: string;
  description: string;
  href: string;
}) => {
  console.log(href);
  return (
    <div className="w-full max-w-sm  rounded-lg  overflow-hidden bg-white shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-500">
      <Image
        width={400}
        height={400}
        className="object-cover object-center w-full h-56 "
        src={imageSrc}
        alt={title}
      />

      <div className="flex items-center px-3 py-2 bg-gray-900">
        <svg
          aria-label="design icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7h20L12 2z" />
          <path d="M2 7v10l10 5 10-5V7H2z" />
        </svg>

        <h3 className="mx-3 text-lg font-semibold text-white">{caption}</h3>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
          {title}
        </h3>

        <p className="pt-2 text-base mb-2 text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="flex  justify-start  w-full">
          <Link
            href={href}
            className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignCard;
