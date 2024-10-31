import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";
import { Button } from "./ui/button";
import Link from 'next/link';
const CallToAction = () => {
  return (
    <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="bg-black/30 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center">
          <SubHeading className="text-white font-bold uppercase ">
            Your dream home is just a click away
          </SubHeading>

          <Paragraph className="text-white mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Paragraph>
          <div className="flex  justify-center mt-3 w-full">
                  <Link href="/cotesion"
                 
                    className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                  >
                    Get Start
                  </Link>
                </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
