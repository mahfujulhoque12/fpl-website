import blog1 from "/public/blog/blog1.png";
import blog2 from "/public/blog/blog2.png";
import blog3 from "/public/blog/blog3.png";
import blog4 from "/public/blog/blog4.png";
import blog5 from "/public/blog/blog5.png";
import blog6 from "/public/blog/blog6.png";
import blog7 from "/public/blog/blog7.png";
import blog8 from "/public/blog/blog8.png";
import blog9 from "/public/blog/blog9.png";
import blog10 from "/public/blog/blog10.png";

import blogClinet from "/public/blog/client.png";

type CardData = {
  id: number;
  slug: string;
  imageUrl: string;
  date: string;
  title: string;
  des: string;
  clinetImg: string; 
  name: string;
  min: string;
  detailsDes?: string;
  detailsInfo?: { id: number; title?: string; info?: string }[];
  tranding?: { id: number; imageUrl?: string; title?: string }[];
};
const createSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: blog1.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path one"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path one",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.,which is the most convenient way ",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets,which is the most convenient way .",
      },
    ],
  
  },
  {
    id: 2,
    imageUrl: blog2.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path tow"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path two",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 7 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 3,
    imageUrl: blog3.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path three"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path three",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 4,
    imageUrl: blog4.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path four"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path four",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 8 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 5,
    imageUrl: blog5.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path five"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.",
      },
    ],
   
  },
  {
    id: 6,
    imageUrl: blog6.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path six"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 7,
    imageUrl: blog7.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path seven"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],

  },
  {
    id: 8,
    imageUrl: blog8.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path eight"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 7 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 9,
    imageUrl: blog9.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path nine"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 10,
    imageUrl: blog10.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path ten"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 8 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 11,
    imageUrl: blog5.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path yelleven"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 5 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 12,
    imageUrl: blog3.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path twlbe"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 13,
    imageUrl: blog10.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path tirteen"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 14,
    imageUrl: blog9.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path fourteen"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
    
  },
  {
    id: 15,
    imageUrl: blog6.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path fiveteen"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
  {
    id: 16,
    imageUrl: blog8.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path sixteen"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
 
  },
  {
    id: 17,
    imageUrl: blog1.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path seventeen"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest,which is the most convenient way , I ventured out to explore the neighborhood. Walking through the narrow streets.",
      },
    ],
   
  },
  {
    id: 18,
    imageUrl: blog7.src,
    date: "January 6 , 2024",
    slug: createSlug(
      "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path 18"
    ),
    title: "Exploring Kyoto's Hidden Temples: A Day Off the Beaten Path",
    des: "Welcome to Kyoto! Beyond the famous shrines and temples, there are secret spots that locals treasure—hidden temples nestled in nature, away from the bustling crowds. Join me on a journey to uncover some of these magical places, perfect for anyone looking for a more serene and meditative Kyoto experience",
    clinetImg: blogClinet.src,
    name: "arlene Robertson",
    min: ". 3 min",
    detailsDes:
      " Kyoto, the ancient capital of Japan, is a city where tradition meets modernity in the most harmonious way. Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses, Kyoto is a city that offers a glimpse into Japan's rich history and culture. In this blog, I’ll take you through my journey in Kyoto, sharing the experiences, sights, and flavors that make this city so enchanting.",
    detailsInfo: [
      {
        id: 1,
        title: "Day 1: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in time. I saw several geishas and maikos (apprentice geishas) hurrying to their appointments.",
      },
      {
        id: 2,
        title: "Day 2: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back.",
      },
      {
        id: 3,
        title: "Day 3: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets of Gion felt like stepping back in the row here.",
      },
      {
        id: 4,
        title: "Day 4: Arrival and First Impressions",
        info: "I arrived at Kansai International Airport early in the morning, feeling the excitement of exploring a new city. After a smooth immigration process, I took the Haruka Express train,which is the most convenient way to get to Kyoto from the airport. The journey was comfortable,with scenic views of the countryside.I checked into my hotel in the Gion district, famous for its well-preserved wooden machiya houses and geishas. After a quick rest, I ventured out to explore the neighborhood. Walking through the narrow streets.,which is the most convenient way ",
      },
    ],
   
  },
];
