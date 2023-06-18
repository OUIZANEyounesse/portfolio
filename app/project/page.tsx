import { ProjectCard } from "@/components";
import { projects } from "@/constants/data";

const page = () => {
  return (
    <div>
      <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top / title */}
        <div className="">
          {/* projects */}
          <div className=" text-white font-bold text-[32px]">
            <span className=" text-[#C778DD]">/</span>
            <span>projects</span>
          </div>
          {/* list */}
          <div className=" text-white mt-[14px]">List of my projects</div>
        </div>
        {/* completed tasks */}
        <div className="">
          {/* title */}
          <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
            <span className=" text-[#C778DD]">#</span>
            <span>Complet && Small App</span>
          </div>
          {/* projects */}
          <div className="flex flex-wrap justify-start  gap-4 my-12">
            {/* cards */}
            {projects.map(
              ({ pathImage, languages, title, discription, viewLinks,ShortDiscription }) => (
                <ProjectCard
                  pathImage={pathImage}
                  languages={languages}
                  title={title}
                  discription={discription}
                  viewLinks={viewLinks}
                  ShortDiscription ={ShortDiscription}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
