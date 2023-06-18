import { skills } from "@/constants/data";
import { shapesUrl } from "@/constants/imagesUrl";
import Image from "next/image";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  return (
    <div>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div data-aos="fade-left" className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>Skills
            </div>
            <div className="line w-1/3 h-px bg-[#C778DD]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex flex-wrap gap-10 justify-between items-center text-white">
          {/* left */}
          <div data-aos="fade-right" className="mx-auto">
            <Image
              src={shapesUrl}
              alt="shapes"
              width={1000}
              height={1000}
              className="w-full mx-auto"
            />
          </div>
          {/* right & mapping */}
          <div
            data-aos="fade-left"
            className=" mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4"
          >
            {skills.map(({ title, languages }) => (
              <SkillsCard title={title} languages={languages} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
