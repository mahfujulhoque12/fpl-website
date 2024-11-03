
import Trand from "/public/tranding/tranding.png";
import Trand2 from "/public/tranding/tranding2.png";
import Trand3 from "/public/tranding/tranding3.png";
type CardData = {
    id: number;
    imageUrl: string;
    title: string;
    des: string;
    slug:string;
  };
  
  const createSlug = (title: string): string =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  export const cardData: CardData[] = [
    {
      id: 1,
      slug:createSlug("False Ceiling Cost in Kolkata: Designs, Materials and Inspirations"),
      imageUrl: Trand.src,
      title: "False Ceiling Cost in Kolkata: Designs, Materials and Inspirations",
      des: " Anusha Kulal | September 20, 2024",
    },
    {
      id: 2,
      slug:createSlug("Beyond Royalty: Purple Two-Colour Combination for Bedroom Walls"),
      imageUrl: Trand2.src,
      title: "Beyond Royalty: Purple Two-Colour Combination for Bedroom Walls",
      des: " Anusha Kulal | September 20, 2024",
    },
    {
      id: 3,
      slug:createSlug("Beyond Royalty: Purple Two-Colour Combination for Bedroom Walls 3"),
      imageUrl: Trand3.src,
      title:
        "Stylish Storage: Beautiful Mirrored Wardrobes with Sliding Door Designs For You",
      des: " Maitreyee Chakraborti | September 20, 2024",
    },
  ];