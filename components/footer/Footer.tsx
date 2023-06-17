import { LogoUrl } from '@/constants/imagesUrl'
import Image from 'next/image'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    {/* line */}
    <div  className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
    {/* footer */}
    <div data-aos = "fade-up" className="px-5 max-w-[1560px] mx-auto">
      {/* top */}
      <div className="flex justify-between gap-y-10 flex-wrap">
        {/* left */}
        <div className="mx-auto md:mx-0">
          <div className=" flex items-center gap-8 mb-3 ">
            {/* logo */}
            <div className=" flex gap-2 items-center text-2xl text-white font-bold">
            <Image
              src={`${LogoUrl}`}
              alt ="close"
              width={50}
              height={50}
            />
              <span>YOuizane</span>
            </div>
            {/* email */}
            <span className="text-[#ABB2BF]">younessouizane@gmail.com</span>
          </div>
          {/* disc */}
          <div className="text-[#ffffff]">
            <p>Full stack Devoloper in Morocco</p>
          </div>
        </div>
        {/* right */}
        <div className=" mx-auto md:mx-0">
          {/* title */}
          <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
          {/* media */}
          <div className="flex items-center gap-2">
            <a href="#">
            <AiOutlineLinkedin/>
            </a>
            <a href="#">
            <AiOutlineGithub/>
            </a>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="text-center text-[#ABB2BF] pb-8 mt-12">
        © Copyright 2023. Made by OUIZANE YOUNESSE
      </div>
    </div>
  </>
  )
}

export default Footer
