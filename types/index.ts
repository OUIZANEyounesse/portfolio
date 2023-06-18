import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
}

export interface CustumSpanProps {
  isHash?: boolean;
  content: string;
  isSelected?: boolean;
}

export interface ProjectCardProps {
  pathImage: string;
  languages: string[];
  title: string;
  discription: string;
}
export interface SkillsCardProps {
  title: string;
  languages: string[];
}
