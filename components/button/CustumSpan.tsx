import { CustumSpanProps } from "@/types";

export default function CustumSpan({isHash, content,isSelected}: CustumSpanProps) {
  return (
<div className={`text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4 ${isSelected && 'text-white'}`}>
      {isHash && (<span className="text-[#C778DD] font-medium">#</span>)}{content}
    </div>
  );
}
