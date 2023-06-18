'use client'
import {  MainUrl } from "@/constants/imagesUrl"
import Image from "next/image"
import { Button } from '@/components';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import {useRouter} from 'next/navigation';
import { NavbarLinks } from "@/constants/data";

const AboutSection = () => {
const router = useRouter();
  const handleNavigation = (path:string) =>{
    router.push(path);
  }
  return (
    <div>
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div  data-aos = "fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>About-Me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"/>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Hello, i’m OUIZANE Younesse!
              <br />
              <br />
              I’m a FULL STACK Developer Next Js  based in zagora, morocco. I
              can develop responsive websites  and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. . I always strive to learn about
              the newest technologies and frameworks.
            </p>
            {/* button */}
            <div className="mt-7">
              <Button 
                title ="Read More"
                containerStyles= "duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white"
                handleClick ={() => handleNavigation(NavbarLinks.about)}
              >
                <AiOutlineDoubleRight/>
              </Button>
            </div>
          </div>
          {/* right */}
          <div  data-aos = "fade-left" className=" mx-auto">
            <Image
                src={MainUrl}
                alt ="main image"
                width={300}
                height ={900}
            />
            <div className="line  h-px bg-[#C778DD]"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutSection

