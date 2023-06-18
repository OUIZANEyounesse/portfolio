'use client'
import { MainUrl } from '@/constants/imagesUrl';
import Image from 'next/image';
import { Button } from '@/components';
import { InfoProfile } from '@/constants/data';

const Hero = () => {
    const handleNavigation = (path:string) =>{
        window.open(path);
    }
    return (
        <div>
        <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            OUIZANE Younesse is a <span className="text-[#C778DD]">Full Satck Developer </span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button 
            title="Contact me!!"
            containerStyles="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]"
            handleClick = {() =>{handleNavigation(InfoProfile.socialLink.whatsapp)}}
          />
        </div>
        <div  data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
          <Image
                src={MainUrl}
                alt ="main image"
                width={300}
                height ={900}
            />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"/>
            <div className="">
              Currently working on <span className="text-white">Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Hero;