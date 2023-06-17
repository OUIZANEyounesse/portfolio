"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@/components";
import { LogoUrl } from "@/constants/imagesUrl";
import CustumSpan from "../button/CustumSpan";
import { NavbarItem } from "@/constants/data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navLink = NavbarItem;
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 bg-[#282C33]">
        <div className=" px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
            {/* logo */}
            <Link href={`/`} className="img">
              <Image src={LogoUrl} alt="logo youizane" width={60} height={60} />
            </Link>
            YOuizane
          </div>
          <div className="right flex items-center">
            <div
              className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${
                !toggle
                  ? `right-[-100%] top-0 bottom-0`
                  : `right-0 top-0 bottom-0`
              } bg-[#282C33] md:static`}
            >
              {navLink.map((item) => (
                <Link href={item.link} onClick={() => setToggle(false)}>
                  <CustumSpan content={item.title} isHash={true} />
                </Link>
              ))}
              <div
                onClick={() => setToggle(false)}
                className="close absolute block md:hidden right-3 top-3"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={() => setToggle(true)} className="">
              <div className="open block md:hidden w-8">
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
