"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import mobileLogo from "/public/fbl-logo.png";
import UserProfile from "./UserProfile";
import { AlignJustify } from "lucide-react";
import MegaMenu from "@/components/navbar/MegaMenu";
import MobileNavigationDrawer from "@/components/navbar/MobileNavigationDrawer";
import Image from "next/image";

interface MobileMenuOpeningPosition {
  mobileMenuPos?: "left" | "right" | "top" | "bottom"; // Make it optional
}
const Navigation = ({ mobileMenuPos = "left" }: MobileMenuOpeningPosition) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="sticky top-0 lef-0 z-50 h-[60px] bg-white border-b border-[#cacaca]">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between gap-4 h-[60px]">
         <div className="flex  gap-5 p-3">
         <button
            ref={drawerButtonRef}
            className="border-none h-[45px] w-[45] -ml-3 bg-transparent md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          

          </button>
          <Link href="/">
          <Image src={mobileLogo} alt="" width={40} height={30} className="h-[30px] w-[30px] md:hidden mt-2"/>
          </Link>
         </div>

          <Link  href="/">
            <Image src={mobileLogo} alt="logo" width={50} height={50} className="hidden md:block  h-auto object-cover" />
          </Link>

          <div className="hidden lg:block">
            <MegaMenu />
          </div>
          <UserProfile />

          {/* Mobile navigation drawer */}
          <div className="lg:hidden absolute">
            <MobileNavigationDrawer
              {...{
                isDrawerOpen,
                setIsDrawerOpen,
                drawerButtonRef,
                mobileMenuPos,
              }}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navigation;
