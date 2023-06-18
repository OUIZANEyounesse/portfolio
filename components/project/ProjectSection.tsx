"use client";
import { NavbarLinks, projects } from "@/constants/data";
import ProjectCard from "./ProjectCard";
import Button from "../button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function ProjectSection() {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="relative">
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div
            data-aos="fade-down"
            className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2"
          >
            <div className="">
              <span className="text-[#C778DD]">#</span>Projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <Button
              title="View All"
              handleClick={() => {
                handleNavigation(NavbarLinks.work);
              }}
            >
              <AiOutlineArrowRight />
            </Button>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects
            .slice(0, 3)
            .map(({ pathImage, languages, title, discription, viewLinks ,ShortDiscription}) => {
              return (
                <>
                  <ProjectCard
                    pathImage={pathImage}
                    languages={languages}
                    title={title}
                    discription={discription}
                    viewLinks={viewLinks}
                    ShortDiscription={ShortDiscription}
                  />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
