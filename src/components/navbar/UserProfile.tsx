import { UserRoundX } from "lucide-react";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div className="register lg:ml-auto">
      <div className="block lg:hidden">
        <button className="avatar border-none flex justify-center items-center cursor-pointer font-medium text-[14px] text-white bg-[#2b2b2b] rounded-full h-10 w-10">
          <UserRoundX />
        </button>
      </div>
      <div className="hidden lg:block">
        <Link
          href={`#`}
          className="text-[15px] text-inherit no-underline cursor-pointer"
        >
          Log in
        </Link>
        <button className="sign border-none inline-flex items-center cursor-pointer font-medium text-[14px] text-white bg-[#cf4045] hover:bg-[#c13136] min-w-[64px] px-4 py-2 rounded-full ml-4">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
