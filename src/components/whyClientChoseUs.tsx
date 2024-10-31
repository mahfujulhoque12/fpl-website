"use client"
import { useEffect, useState } from 'react';
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Paragraph from './typography/Paragraph';
import { FaHandPointRight } from "react-icons/fa";

type CardData = {
    id: number;
    title: string;
    des: string;
};

const cardData: CardData[] = [
    {
        id: 1,
        title: "15+",
        des: "Countries We Have",
    },
    {
        id: 2,
        title: "11+",
        des: "Years Of Experience",
    },
    {
        id: 3,
        title: "200+",
        des: "Happy Clients",
    },
    {
        id: 4,
        title: "100+",
        des: "Awards We Have",
    },
];


function useCounter(targetValue: string , duration:number = 2000) {
  
        const [count, setCount] = useState(0);
    
        useEffect(() => {
            const end = parseInt(targetValue.replace('+', ''));
            if (end === 0) return;
    
            const increment = end / (duration / 50);
            let current = 0;
    
            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(current));
                }
            }, 50);
    
            return () => clearInterval(timer);
        }, [targetValue, duration]);
    
        return count;
    }


const WhyClientChoseUs = () => {
    return (
        <section className="py-10 md:py-15">
            <MaxWidthWrapper>
                <div>
                    <SubHeading className="text-center text-gray-700 uppercase font-bold">
                        Why Clients Choose Us?
                    </SubHeading>

                  

                    {/* Second Part */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-2">
                        {cardData.map((card) => {
                            const count = useCounter(card.title);
                            return (
                                <div
                                    className="border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300"
                                    key={card.id}
                                >
                                    <h4 className="flex items-center justify-center text-3xl font-bold text-[#cf4045]">
                                        {count}+
                                    </h4>
                                    <Paragraph className="text-center text-gray-500">{card.des}</Paragraph>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default WhyClientChoseUs;
