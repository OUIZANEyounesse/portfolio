"use client";
import { ProjectCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import {
  AiFillFilePdf,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineFundView,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { useState } from "react";
import DetailProject from "./DetailProject";
const ProjectCard = ({
  pathImage,
  languages,
  title,
  discription,
  viewLinks,
  ShortDiscription,
}: ProjectCardProps) => {
  const handleNavigation = (path: string) => {
    window.open(path, "_blank");
  };

  const [isOpen, setIsOpen] = useState(false);
  const project = {
    pathImage,
    languages,
    title,
    discription,
    viewLinks,
    ShortDiscription,
  };
  return (
    <>
      <DetailProject
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        project={project}
      />
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="border flex flex-col mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0"
      >
        <Image
          src={pathImage}
          alt={title}
          width={1000}
          height={1000}
          className="object-container"
        />
        {/* skills */}

        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {languages.map((language) => (
            <span className=" text-[#ABB2BF]">{language}</span>
          ))}
        </div>
        {/* discription  */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{ShortDiscription}</p>
          {/* /liks view  */}
          <div className="flex flex-wrap gap-1">
            <Button
              title="More"
              containerStyles="flex-1 py-1 px-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
              handleClick={() => {
                setIsOpen(true);
              }}
            >
              <AiOutlineDoubleRight />
            </Button>
            {viewLinks.map((item: any) => (
              <>
                {item.title === "demo" && (
                  <Button
                    title="Demo"
                    containerStyles="flex-1 py-1 px-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                    handleClick={() => {
                      handleNavigation(item.link);
                    }}
                  >
                    <AiOutlineDoubleLeft />
                    <AiOutlineDoubleRight />
                  </Button>
                )}
                {item.title === "github" && (
                  <Button
                    title="GitHub"
                    containerStyles="flex-1 py-1 px-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                    handleClick={() => {
                      handleNavigation(item.link);
                    }}
                  >
                    <AiOutlineFundView />
                  </Button>
                )}
                {item.title === "document" && (
                  <Button
                    title="Document"
                    containerStyles="flex-1 py-1 px-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                    handleClick={() => {
                      handleNavigation(item.link);
                    }}
                  >
                    <AiFillFilePdf />
                  </Button>
                )}
                {item.title === "video" && (
                  <Button
                    title="Youtube"
                    containerStyles="flex-1 py-1 px-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                    handleClick={() => {
                      handleNavigation(item.link);
                    }}
                  >
                    <AiOutlineVideoCamera />
                  </Button>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
