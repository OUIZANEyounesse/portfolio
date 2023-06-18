'use client'
import { ProjectCardProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from '@/components';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const ProjectCard = ({
  pathImage,
  languages,
  title,
  discription,
}: ProjectCardProps) => {
    const router = useRouter();
    const handleNavigation =(path:string)=>{
        window.open(path, '_blank')
    }
  return (
    <>
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
          <p className=" py-4 text-[#ABB2BF]">{discription}</p>
          {/* btns */}
          <Button
            title="Live"
            containerStyles ="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
            handleClick ={() => {handleNavigation(pathImage)}}
          >
            <AiOutlineDoubleLeft/>
            <AiOutlineDoubleRight/>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
