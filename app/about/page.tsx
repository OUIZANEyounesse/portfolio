import { AboutSection, FunFacts, Skills } from "@/components";

const page = () => {
  return (
    <div className="pt-[114px] px-5 max-w-[1560px] mx-auto">
      <div className=" mb-12">
        <div className=" text-white w-2/3 font-semibold text-[32px]">
          <div className="">
            <span className="text-[#C778DD]">/</span>
            about-me
          </div>
          <div className=" text-white text-base font-normal mt-[14px]">
            Who am i?
          </div>
        </div>
      </div>
      <AboutSection />
      <Skills />
      <FunFacts/>
    </div>
  );
};

export default page;
