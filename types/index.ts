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
  viewLinks: any;
}
export interface SkillsCardProps {
  title: string;
  languages: string[];
}
export interface DetailsProjectProps {
  isOpen: boolean;
  closeModal: () => void;
  project: ProjectCardProps;
}

export interface AboutSectionProps {
  isMore?: boolean;
}

export interface SkillsProps {
  isLeftImage?: boolean;
}
