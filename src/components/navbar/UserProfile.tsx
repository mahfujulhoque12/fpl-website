import { UserRoundX } from "lucide-react";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div className="register">
      <div className="block lg:hidden">
        <button className="avatar border-none flex justify-center items-center cursor-pointer font-medium text-[14px] rounded-md text-white bg-[#cf4045] hover:bg-[#c13136] px-4 py-2 ">
          {/* <UserRoundX /> */}
          Quotation
        </button>
      </div>
      <div className="hidden lg:block">
      
        <Link href="/cotesion" className="sign border-none inline-flex items-center cursor-pointer font-medium text-[14px] text-white bg-[#cf4045] hover:bg-[#c13136] min-w-[64px] px-4 py-2 rounded-md ml-4">
          Get Quotation
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
