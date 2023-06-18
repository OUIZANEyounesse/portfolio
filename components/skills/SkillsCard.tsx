import { SkillsCardProps } from "@/types";

const SkillsCard = ({title, languages}:SkillsCardProps) => {
  return (
    <>
      <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]">
        <div className=" p-2">
          <h2 className=" font-semibold">{title}</h2>
        </div>
        <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
          {languages.map((e) => {
            return <span>{e}</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
