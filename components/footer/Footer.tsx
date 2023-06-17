import { InfoProfile } from "@/constants/data";
import { LogoUrl } from "@/constants/imagesUrl";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="relative">
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8" />
      <div data-aos="fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <Image src={`${LogoUrl}`} alt="close" width={50} height={50} />
                <span>{InfoProfile.userName}</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">{InfoProfile.email}</span>
              <span className="text-[#ABB2BF]">{InfoProfile.tel}</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>{InfoProfile.jobTitle}</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Social Media</h2>
            {/* media */}
            <div className="flex items-center gap-8 text-white">
              <Link href={InfoProfile.socialLink.linkedin}>
                <AiOutlineLinkedin />
              </Link>
              <Link href={InfoProfile.socialLink.github}>
                <AiOutlineGithub />
              </Link>
              <Link href={InfoProfile.socialLink.youtube}>
                <AiOutlineGithub />
              </Link>
              <Link href={InfoProfile.socialLink.youtube}>
                <AiOutlineYoutube />
              </Link>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          {InfoProfile.copyright}
        </div>
      </div>
    </div>
  );
};

export default Footer;
