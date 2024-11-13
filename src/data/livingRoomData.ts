import living1 from "/public/living/living6.png";
import living2 from "/public/living/living5.png";
import living3 from "/public/living/living4.png";
import living4 from "/public/living/living3.png";
import living5 from "/public/living/living2.png";
import living6 from "/public/living/living1.png";

import bed1 from "/public/bedroom/bed1.png";
import bed2 from "/public/bedroom/bed2.png";
import bed3 from "/public/bedroom/bed3.png";
import bed4 from "/public/bedroom/bed4.png";
import bed5 from "/public/bedroom/bed5.png";
import bed6 from "/public/bedroom/bed6.png";

import kitchen1 from "/public/kitcen/kitcen1.png";
import kitchen2 from "/public/kitcen/kitcen2.png";
import kitchen3 from "/public/kitcen/kitcen3.png";
import kitchen4 from "/public/kitcen/kitcen4.png";
import kitchen5 from "/public/kitcen/kitcen5.png";
import kitchen6 from "/public/kitcen/kitcen6.png";

import commercial1 from "/public/commercial/commercial1.png";
import commercial2 from "/public/commercial/commercial2.png";
import commercial3 from "/public/commercial/commercial3.png";
import commercial4 from "/public/commercial/commercial4.png";
import commercial5 from "/public/commercial/commercial5.png";
import commercial6 from "/public/commercial/commercial6.png";

import corporatre1 from "/public/corporatre/corporeate.png";
import corporatre2 from "/public/corporatre/corporeate2.png";
import corporatre3 from "/public/corporatre/corporeate3.png";
import corporatre4 from "/public/corporatre/corporeate4.png";
import corporatre5 from "/public/corporatre/corporeate5.png";
import corporatre6 from "/public/corporatre/corporeate6.png";

import reception1 from "/public/reception/reciption7.png";
import reception2 from "/public/reception/reciption2.png";
import reception3 from "/public/reception/reciption3.png";
import reception4 from "/public/reception/reciption4.png";
import reception5 from "/public/reception/reciption5.png";
import reception6 from "/public/reception/reciption6.png";
import reception7 from "/public/reception/reciption1.png";

import shop1 from "/public/shop/shop5.png";
import shop2 from "/public/shop/shop4.png";
import shop3 from "/public/shop/shop3.png";
import shop4 from "/public/shop/shop2.png";
import shop5 from "/public/shop/shop1.png";
import shop6 from "/public/shop/shop4.png";
import shop7 from "/public/shop/shop2.png";

import store1 from "/public/store/store1.png";
import store2 from "/public/store/store2.png";
import store3 from "/public/store/store3.png";
import store4 from "/public/store/store4.png";
import store5 from "/public/store/store5.png";
import store6 from "/public/store/store6.png";

export type CardData = {
  id: number;
  slug: string;
  imageUrl?: string;
  title: string;
  des: string;
  price?: string;
  type?: string;
  completeDate?: string;
  companyInfo?: string;
  oldPrice?: string;
  feature?: string;
  allImageUrl?: string[];
  sustainabilityFeatures?: string;
  caseStudies?: string;
  floorPlans?: string;
  designFeatures?: string;
};
const createSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const cardData: CardData[] = [
  {
    id: 1,
    slug: createSlug("Simple Living Room in your budget"),
    imageUrl: living1.src,
    title: "The Living Space",
    des: "The Living Space is a thoughtfully designed area that blends comfort, style, and functionality to create the perfect environment for relaxation and socializing.",
    oldPrice: "$2000",
    price: "$1000",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "A top-notch floor planer company brings years of expertise in creating efficient and aesthetically pleasing layouts, whether for residential or commercial spaces. Their designs often balance functionality with creativity, ensuring that every square foot of space is optimized for its intended use",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      living1.src,
      living2.src,
      living3.src,
      living3.src,
      living3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 2,
    slug: createSlug("Comfortable Living Room for Relaxation"),
    imageUrl: living2.src,
    title: "The Lounge Haven",
    des: "The Lounge Haven is a tranquil retreat designed for relaxation and social connection, offering a perfect blend of comfort and style for any home",
    oldPrice: "$2000",
    price: "$1500",
    type: "Room",
    completeDate: "1 Week",
    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      living2.src,
      living5.src,
      living3.src,
      living5.src,
      living1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 3,
    slug: createSlug("Elegant Modern Living Room"),
    imageUrl: living3.src,
    title: "The Relaxation Hub",
    des: "The Relaxation Hub is a serene space designed to provide ultimate comfort and tranquility, creating the perfect environment for unwinding and rejuvenation.",
    oldPrice: "$3000",
    price: "$2000",
    type: "Room",
    completeDate: "1 Week",
    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      living3.src,
      living2.src,
      living6.src,
      living1.src,
      living3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 4,
    slug: createSlug("Cozy Family Living Room"),
    imageUrl: living4.src,
    title: "The Living Chamber",
    des: "The Living Chamber is an elegant and inviting space that combines modern design with cozy comfort, perfect for both relaxation and socializing.",
    oldPrice: "$2000",
    price: "$1800",
    type: "Room",
    completeDate: "1 Week",
    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      living4.src,
      living6.src,
      living2.src,
      living6.src,
      living1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 5,
    slug: createSlug("Spacious Living Room for Gatherings"),
    imageUrl: living5.src,
    title: "The Homestead Haven",
    des: "The Homestead Haven is a warm and welcoming space that blends rustic charm with modern comfort, creating the perfect environment for family gatherings and relaxation.",
    oldPrice: "$3000",
    price: "$2200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      living5.src,
      living1.src,
      living3.src,
      living6.src,
      living1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 6,
    slug: createSlug("Minimalist Living Room Design"),
    imageUrl: living6.src,
    title: "The Family Nook",
    des: "The Family Nook is a cozy, intimate space designed to bring loved ones together, offering comfort and warmth for everyday moments and memorable gatherings.",

    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      living6.src,
      living5.src,
      living3.src,
      living6.src,
      living1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  //bed room data

  {
    id: 7,
    slug: createSlug("Simple Bed Room in your budget"),
    imageUrl: bed1.src,
    title: "The Peaceful Escape",
    des: "The Peaceful Escape is a soothing retreat designed to provide a quiet sanctuary, offering comfort and serenity for restful sleep and relaxation.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [bed1.src, bed4.src, bed2.src, bed3.src, bed2.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 8,
    slug: createSlug("Comfortable Living Room for Relaxation"),
    imageUrl: bed2.src,
    title: "The Tranquil Room",
    des: "The Tranquil Room is a peaceful sanctuary designed to calm the mind and body, offering a serene space for rest and rejuvenation.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [bed2.src, bed6.src, bed4.src, bed1.src, bed2.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 9,
    slug: createSlug("Normal Bed Room Four "),

    imageUrl: bed3.src,
    title: "The Cozy Chamber",
    des: "The Cozy Chamber is a warm and inviting space designed for ultimate comfort, offering a perfect blend of relaxation and intimacy for a restful night's sleep.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [bed3.src, bed5.src, bed6.src, bed4.src, bed2.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 10,
    slug: createSlug("Normal Bed Room Three"),

    imageUrl: bed4.src,
    title: "The Serenity Suite",
    des: "The Serenity Suite is an elegant and calming space designed to foster relaxation and tranquility, providing the ideal environment for restful nights and peaceful moments.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [bed4.src, bed5.src, bed2.src, bed4.src, bed2.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 11,
    slug: createSlug("Normal Bed Room Two "),

    imageUrl: bed5.src,
    title: "The Restful Retreat",
    des: "The Restful Retreat is a serene sanctuary designed to promote relaxation and peaceful sleep, offering a perfect escape from the stresses of everyday life.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [bed5.src, bed4.src, bed2.src, bed4.src, bed2.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 12,
    slug: createSlug("Normal Bed Room"),

    imageUrl: bed6.src,
    title: "The Dream Haven",
    des: "The Dream Haven is a peaceful retreat designed to provide ultimate comfort and tranquility, creating the perfect space for restful sleep and rejuvenation.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [bed6.src, bed5.src, bed2.src, bed4.src, bed2.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  //Kitchen Residences   data

  {
    id: 13,
    slug: createSlug("Simple Kitchen Residence in your budget"),

    imageUrl: kitchen1.src,
    title: "The Dining Den",
    des: "The Dining Den is a cozy and inviting space designed for shared meals and meaningful conversations, where comfort meets style for an enjoyable dining experience.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      kitchen1.src,
      kitchen6.src,
      kitchen2.src,
      kitchen2.src,
      kitchen6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 14,
    slug: createSlug("Simple Kitchen Residence in your comfort zoon"),

    imageUrl: kitchen2.src,
    title: "The Family Kitchen",
    des: "The Family Kitchen is a warm and welcoming space where loved ones can gather, cook, and share meals, creating lasting memories in a functional and stylish environment.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      kitchen2.src,
      kitchen5.src,
      kitchen3.src,
      kitchen2.src,
      kitchen6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 15,
    slug: createSlug("Normal Kitchen Residence Four"),

    imageUrl: kitchen3.src,
    title: "The Chef,s Retreat",
    des: "The Chef,s Retreat is a well-appointed kitchen designed for culinary excellence, offering a serene and functional space where cooking becomes an enjoyable and creative experience.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      kitchen3.src,
      kitchen2.src,
      kitchen5.src,
      kitchen2.src,
      kitchen6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 16,
    slug: createSlug("Normal Kitchen Residence Three "),

    imageUrl: kitchen4.src,
    title: "The Epicurean Space",
    des: "The Epicurean Space is a sophisticated and stylish kitchen designed for food enthusiasts, blending modern appliances with a cozy atmosphere to inspire culinary exploration and enjoyable dining experiences.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      kitchen4.src,
      kitchen5.src,
      kitchen1.src,
      kitchen2.src,
      kitchen6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 17,
    slug: createSlug("Normal Kitchen Residence Two"),

    imageUrl: kitchen5.src,
    title: "The Cooking Sanctuary",
    des: "The Cooking Sanctuary is a peaceful and inspiring space designed for culinary creativity, offering a perfect blend of functionality and comfort for creating delicious meals and enjoying time with loved ones.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      kitchen5.src,
      kitchen1.src,
      kitchen2.src,
      kitchen2.src,
      kitchen6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 18,
    slug: createSlug("Normal Kitchen Residence"),

    imageUrl: kitchen6.src,
    title: "The Hearth Room",
    des: "The Hearth Room is a warm and inviting space designed to bring people together, offering a cozy atmosphere perfect for cooking, dining, and creating lasting memories.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      kitchen6.src,
      kitchen3.src,
      kitchen1.src,
      kitchen2.src,
      kitchen6.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  // Kitchen Commercial data

  {
    id: 19,
    slug: createSlug("Simple Kitchen Commercial in your budget"),

    imageUrl: commercial1.src,
    title: "The Elite Kitchen",
    des: "The Elite Kitchen is a premium, high-end cooking space designed with top-tier appliances and elegant finishes, offering both style and functionality for the most discerning chefs.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      commercial1.src,
      commercial2.src,
      commercial3.src,
      commercial3.src,
      commercial2.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 20,
    slug: createSlug("Simple Kitchen Commercial in your comfort zoon"),

    imageUrl: commercial2.src,
    title: "The Industrial Kitchen",
    des: "The Industrial Kitchen is a robust, high-performance cooking space built for heavy-duty use, featuring commercial-grade appliances and durable materials to handle large-scale meal preparation with ease.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      commercial2.src,
      commercial6.src,
      commercial5.src,
      commercial2.src,
      commercial3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 21,
    slug: createSlug("Normal Kitchen Commercial Seven"),

    imageUrl: commercial3.src,
    title: "The Culinary Workshop",
    des: "The Culinary Workshop is a dynamic and well-equipped kitchen space designed for both learning and creating, providing the perfect environment for culinary experimentation and mastery.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      commercial3.src,
      commercial5.src,
      commercial4.src,
      commercial2.src,
      commercial3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 22,
    slug: createSlug("Normal Kitchen Commercial Eight"),

    imageUrl: commercial4.src,
    title: "The Food Prep Zone",
    des: "The Food Prep Zone is a well-organized and efficient kitchen area designed for seamless meal preparation, offering ample space and high-quality tools to streamline cooking tasks.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      commercial4.src,
      commercial2.src,
      commercial3.src,
      commercial2.src,
      commercial3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 23,
    slug: createSlug("Normal Kitchen Commercial Nine"),

    imageUrl: commercial5.src,
    title: "The Kitchen Lab",
    des: "The Kitchen Lab is an innovative and functional space designed for culinary experimentation, equipped with state-of-the-art tools to inspire creativity and precision in cooking.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      commercial5.src,
      commercial1.src,
      commercial6.src,
      commercial2.src,
      commercial3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 24,
    slug: createSlug("Normal Kitchen Commercial Ten"),

    imageUrl: commercial6.src,
    title: "The Cooking Command Center",
    des: "The Cooking Command Center is a professional-grade kitchen designed for efficiency and precision, providing the perfect environment for high-volume meal preparation.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      commercial6.src,
      commercial4.src,
      commercial3.src,
      commercial2.src,
      commercial3.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  //corporate office data
  {
    id: 25,
    slug: createSlug("Simple Corporate Office in your budget"),

    imageUrl: corporatre1.src,
    title: "The Business Den",
    des: "The Business Den is a sleek, professional space designed to foster focus, collaboration, and strategic thinking for business success.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      corporatre1.src,
      corporatre2.src,
      corporatre4.src,
      corporatre1.src,
      corporatre2.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 26,
    slug: createSlug("Simple Corporate Office in your comfort zoon"),

    imageUrl: corporatre2.src,
    title: "The Workspace Collective",
    des: "The Workspace Collective is a collaborative office environment designed to inspire innovation and teamwork in a flexible, dynamic setting.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      corporatre2.src,
      corporatre4.src,
      corporatre6.src,
      corporatre1.src,
      corporatre2.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 27,
    slug: createSlug("Normal Corporate Office Three"),

    imageUrl: corporatre3.src,
    title: "The Office Oasis",
    des: "The Office Oasis is a calming and inspiring workspace designed to provide a peaceful retreat within the office, promoting relaxation and focus while fostering creativity and productivity.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      corporatre3.src,
      corporatre5.src,
      corporatre6.src,
      corporatre1.src,
      corporatre2.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 28,
    slug: createSlug("Normal Corporate Office Two"),

    imageUrl: corporatre4.src,
    title: "The Corporate Loft",
    des: "The Corporate Loft is a sleek and modern office space designed to inspire creativity and productivity, offering an open and collaborative environment for professionals.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      corporatre4.src,
      corporatre5.src,
      corporatre1.src,
      corporatre1.src,
      corporatre2.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 29,
    slug: createSlug("Normal Corporate Office"),

    imageUrl: corporatre5.src,
    title: "The Workstation Zone",
    des: "The Workstation Zone is a dedicated area designed for optimal productivity, offering an organized and functional environment to support focused work and collaboration.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      corporatre5.src,
      corporatre2.src,
      corporatre4.src,
      corporatre1.src,
      corporatre2.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 30,
    slug: createSlug("Normal Kitchen Commercial"),

    imageUrl: corporatre6.src,
    title: "The Productivity Hub",
    des:"The Productivity Hub is a dynamic workspace designed to enhance focus and collaboration, empowering teams to achieve their goals efficiently.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      corporatre6.src,
      corporatre3.src,
      corporatre5.src,
      corporatre1.src,
      corporatre2.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  // office Reception

  {
    id: 31,
    slug: createSlug("Simple Office Reception in your budget"),

    imageUrl: reception1.src,
    title: "The Welcome Desk",
    des: "The Welcome Desk is a warm and inviting reception area designed to greet visitors, provide information, and ensure a smooth experience from the moment they arrive.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      reception1.src,
      reception2.src,
      reception3.src,
      reception1.src,
      reception4.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 32,
    slug: createSlug("Simple Office Reception in your comfort zoon"),

    imageUrl: reception2.src,
    title: "The Reception Hub",
    des: "The Reception Hub is a central, organized space designed to efficiently manage guest interactions while creating a professional and inviting atmosphere.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      reception2.src,
      reception4.src,
      reception6.src,
      reception3.src,
      reception1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  {
    id: 33,
    slug: createSlug("Normal Office Reception Five"),

    imageUrl: reception3.src,
    title: "The Entryway",
    des: "The Entryway is a welcoming and functional space designed to offer a smooth transition into the office, making a positive first impression for visitors and guests.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      reception3.src,
      reception5.src,
      reception7.src,
      reception3.src,
      reception1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  {
    id: 34,
    slug: createSlug("Normal Office Reception Four"),

    imageUrl: reception4.src,
    title: "The Lobby Desk",
    des: "The Lobby Desk is a sleek and functional reception area designed to efficiently manage visitors while creating a professional first impression.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      reception4.src,
      reception5.src,
      reception6.src,
      reception3.src,
      reception1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 35,
    slug: createSlug("Normal Office Reception Three"),

    imageUrl: reception5.src,
    title: "The Visitor,s Welcome",
    des: "The Visitor's Welcome is a friendly and professional reception area designed to provide a warm greeting and seamless experience for all guests.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      reception5.src,
      reception1.src,
      reception7.src,
      reception3.src,
      reception1.src,
    ],

    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 36,
    slug: createSlug("Normal Office Reception Two"),

    imageUrl: reception6.src,
    title: "The Reception Nook",
    des: "The Reception Nook is a cozy and inviting space that offers a warm welcome, providing a professional yet comfortable environment for visitors and clients.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      reception6.src,
      reception2.src,
      reception3.src,
      reception3.src,
      reception1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 37,
    slug: createSlug("Normal Office Reception"),

    imageUrl: reception7.src,
    title: "The Frontline Station",
    des: "The Frontline Station is a professional reception area designed to efficiently manage visitors and create a welcoming first impression.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [
      reception7.src,
      reception3.src,
      reception6.src,
      reception3.src,
      reception1.src,
    ],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  // supper shop data
  {

    id: 38,
    slug: createSlug("Simple Supper Shop in your budget"),
    imageUrl: shop1.src,
    title: "The Evening Platter",
    des: "The Evening Platter offers a tempting selection of late-night meals, served in a cozy and relaxed setting, perfect for unwinding and enjoying a flavorful dinner.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [shop1.src, shop3.src, shop5.src, shop3.src, shop1.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 39,
    slug: createSlug("Simple Supper Shop in your comfort zoon"),

    imageUrl: shop2.src,
    title: "The Cozy Supper",
    des: "The Cozy Supper is a warm and inviting spot where you can enjoy comforting late-night meals, offering a perfect atmosphere for relaxation and a satisfying dining experience.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [shop2.src, shop7.src, shop4.src, shop3.src, shop1.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 40,
    slug: createSlug("Normal Supper Shop Five"),

    imageUrl: shop3.src,
    title: "Supper Street",
    des: "Supper Street is a vibrant and lively spot offering a variety of delicious late-night meals, perfect for those looking to enjoy flavorful dishes in a casual, energetic atmosphere.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [shop3.src, shop6.src, shop2.src, shop3.src, shop1.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 41,
    slug: createSlug("Normal Supper Shop Four"),

    imageUrl: shop4.src,
    title: "The Nightly Feast",
    des: "The Nightly Feast offers a delectable array of late-night meals, creating the perfect spot to indulge in hearty dishes and unwind after a long day.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [shop4.src, shop7.src, shop2.src, shop3.src, shop1.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 42,
    slug: createSlug("Normal Supper Shop Three"),

    imageUrl: shop5.src,
    title: "Supper Haven",
    des: "Supper Haven is a welcoming retreat that serves up a variety of comforting late-night meals, providing a cozy and inviting space to enjoy a satisfying dinner at any hour.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [shop5.src, shop1.src, shop6.src, shop3.src, shop1.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 43,
    slug: createSlug("Normal Supper Shop Two"),

    imageUrl: shop6.src,
    title: "The Twilight Tastes",
    des: "The Twilight Tastes is a charming supper shop offering a delightful selection of late-night dishes, perfect for enjoying a flavorful meal in a cozy and relaxed atmosphere.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [shop6.src, shop2.src, shop5.src, shop3.src, shop1.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 44,
    slug: createSlug("Normal Supper Shop"),

    imageUrl: shop7.src,
    title: "The Supper Spot",
    des: "The Supper Spot is a cozy destination offering a wide range of delicious, late-night meals, designed to satisfy your cravings and provide the perfect place to relax after a long day.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [shop7.src, shop5.src, shop3.src, shop3.src, shop1.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },

  // store data

  {
    id: 45,
    slug: createSlug("Simple Store Room in your budget"),

    imageUrl: store1.src,
    title: "The Storage Den",
    des: "The Storage Den is a cozy and efficient space designed to neatly store and organize your items, providing a convenient and accessible area for all your storage needs.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [store1.src, store2.src, store3.src, store2.src, store4.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 46,
    slug: createSlug("Simple Store Room in your comfort zoon"),

    imageUrl: store2.src,
    title: "The Reserve Room",
    des: "The Reserve Room is a neatly organized space designed to store backup supplies and essentials, ensuring that everything is readily available when needed for future use.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [store2.src, store4.src, store5.src, store2.src, store4.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 47,
    slug: createSlug("Normal Store Room six"),

    imageUrl: store3.src,
    title: "The Storeroom Vault",
    des: "The Storeroom Vault is a secure and highly organized space designed to safely store valuable items, ensuring both protection and easy access whenever needed.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [store2.src, store4.src, store5.src, store2.src, store4.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 48,
    slug: createSlug("Normal Store Room Five"),

    imageUrl: store4.src,
    title: "The Supply Closet",
    des: "The Supply Closet is a compact and organized space designed to store essential materials and supplies, ensuring everything is easily accessible and neatly arranged for quick use.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [store3.src, store6.src, store1.src, store2.src, store4.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 49,
    slug: createSlug("Normal Store Room Four"),

    imageUrl: store5.src,
    title: "The Inventory Zone",
    des: "The Inventory Zone is a well-organized and efficient storage area designed to keep your stock in order, providing easy access and seamless management of goods and supplies.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [store4.src, store5.src, store2.src, store2.src, store4.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 50,
    slug: createSlug("Normal Store Room Three"),

    imageUrl: store6.src,
    title: "The Goods Locker",
    des: "The Goods Locker is a secure and organized space designed to store and protect valuable items, providing easy access and efficient storage for all your essentials.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [store5.src, store3.src, store6.src, store2.src, store4.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
  {
    id: 51,
    slug: createSlug("Normal Store Room two"),
    imageUrl: store4.src,
    title: "The Pantry Depot",
    des: "The Pantry Depot is a spacious and well-organized storage area designed to keep your food supplies neatly arranged, ensuring easy access to all your pantry essentials.",
    oldPrice: "$2000",
    price: "$1200",
    type: "Room",
    completeDate: "1 Week",

    companyInfo:
      "Floor Planer is a forward-thinking architecture company that prides itself on designing spaces that are not only visually stunning but also highly functional. With a focus on innovation and sustainability, they craft unique architectural solutions that meet the evolving needs of both residential and commercial clients. Their expertise extends across a variety of projects, including urban developments, eco-friendly homes, office spaces, and large-scale public infrastructure.",

    feature:
      "3D Floor Plan Visualizations, Virtual Tours, Customizable Layout Options, Real-time Collaboration Tools, Automated Space Calculations, Furniture and Fixture Placement, Multiple Format Exporting, Integration with Building Regulations, Energy Efficiency and Sustainability Features, Project Management Integration, BIM (Building Information Modeling) Integration, Space Optimization Tools, Mobile-Friendly Platform, Cost Estimation Tools, Material and Finish Selection",

    allImageUrl: [store6.src, store2.src, store3.src, store2.src, store4.src],
    designFeatures:
      "At Floor Planer, our designs are centered around innovation, sustainability, and functionality. We create spaces that seamlessly blend form and function, incorporating eco-friendly materials and energy-efficient systems to promote a greener future. Our focus on maximizing space ensures that each area is versatile and adaptable, while large windows and open layouts foster a natural connection between indoor and outdoor environments. Every design is crafted with a timeless aesthetic, ensuring it remains both practical and visually striking for years to come.",

    floorPlans:
      "Our thoughtfully designed floor plans offer a clear and detailed view of the spatial layout, allowing you to explore the flow and functionality of each area. Carefully crafted to maximize space efficiency and comfort, our plans balance open-concept designs with purposeful divisions to create versatile living or working environments. Whether you're looking for expansive open spaces or intimate, cozy corners, our floor plans provide a flexible foundation to meet your unique needs, ensuring a seamless experience from concept to completion.",

    caseStudies:
      "Our case studies highlight the journey behind some of our most successful projects, offering a detailed look at the challenges faced, creative solutions implemented, and the results achieved. Each case study explores the unique client needs, site constraints, and design objectives that shaped the final outcome, demonstrating our ability to deliver innovative, tailored solutions. From sustainable architecture to complex structural designs, these examples showcase our commitment to excellence and our expertise in turning architectural visions into reality.",

    sustainabilityFeatures:
      "At Floor Planer, sustainability is at the heart of our design approach. We prioritize eco-friendly materials, energy-efficient systems, and green building practices to minimize the environmental impact of our projects. By integrating features such as solar panels, rainwater harvesting systems, and natural ventilation, we ensure that our buildings not only reduce energy consumption but also promote healthier living environments. Our commitment to sustainability extends to every stage of the design process, from the selection of renewable materials to the implementation of smart technologies that support a more sustainable future.",
  },
];
