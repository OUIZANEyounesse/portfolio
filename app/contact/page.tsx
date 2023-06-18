import { Contact } from "@/components";
import { InfoProfile } from "@/constants/data";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";

const page = () => {
  return (
    <div className="px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10">
      {/* title */}
      <div className=" text-white font-semibold text-[32px] mt-12">
        <span className=" text-[#C778DD]">/</span>
        Contacts
      </div>
      {/* h2 title */}
      <div className=" text-white mt-[14px] mb-[46px]">Who am i?</div>
      <Contact />

      {/* all media */}
      <div className=" mt-6 mb-5x">
        {/* title */}
        <div className=" text-[32px] font-medium text-white">
          <span className="text-[#C778DD]">#</span>all-media
        </div>
        {/* media */}
        <div className=" flex gap-6">
          <div className=" text-[#ABB2BF] flex items-center gap-1">
            <Link
              href={`mailto:${InfoProfile.email}`}
              target="_blank"
              className="text-[#ABB2BF] flex flex-wrap items-center gap-1"
            >
              <AiOutlineMail />
            </Link>
              <span>{InfoProfile.email}</span>
          </div>
          <div className=" text-[#ABB2BF] flex items-center gap-1">
            <Link
              href={`${InfoProfile.socialLink.whatsapp}`}
              target="_blank"
              className="text-[#ABB2BF] flex flex-wrap items-center gap-1"
            >
              <AiOutlineWhatsApp />
            </Link>
              <span>{InfoProfile.tel}</span>
          </div>
          <div className=" text-[#ABB2BF] flex items-center gap-1">
            <Link
              href={`mailto:${InfoProfile.socialLink.youtube}`}
              target="_blank"
              className="text-[#ABB2BF] flex flex-wrap items-center gap-1"
            >
              <AiOutlineYoutube />
              
            </Link>
            <span>{InfoProfile.socialAlias.youtube}</span>
          </div>
          <div className=" text-[#ABB2BF] flex items-center gap-1">
            <Link
              href={`mailto:${InfoProfile.socialLink.github}`}
              target="_blank"
              className="text-[#ABB2BF] flex flex-wrap items-center gap-1"
            >
              <AiOutlineGithub />
            </Link>
            <span>{InfoProfile.socialAlias.github}</span>
          </div>
          <div className=" text-[#ABB2BF] flex items-center gap-1">
            <Link
              href={`mailto:${InfoProfile.socialLink.linkedin}`}
              target="_blank"
              className="text-[#ABB2BF] flex flex-wrap items-center gap-1"
            >
              <AiOutlineLinkedin />
            </Link>
            <span>{InfoProfile.socialAlias.linkedin}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
