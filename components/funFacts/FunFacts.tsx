import { shapesUrl } from "@/constants/imagesUrl";
import Image from "next/image";
import { FunFactsItems } from "@/constants/data";
const FunFacts = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* title */}
      <div className=" mb-12 text-[32px] font-medium text-white">
        <span className="text-[#C778DD]">#</span>
        my-fun-facts
      </div>
      <div className="flex justify-center gap-y-10 md:justify-between gap-4 items-center flex-wrap">
        {/* left */}
        <div className=" flex justify-start gap-4 w-full md:w-[58%] flex-wrap">
          {FunFactsItems.map((item) => (
            <div
              className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal"
            >
              {item}
            </div>
          ))}
        </div>
        {/* right */}
        <div className=" flex justify-center items-center  w-full md:w-[38%]">
          <Image
            src={shapesUrl}
            alt="shapes"
            width={200}
            height={200}
            className="object-container"
          />
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
