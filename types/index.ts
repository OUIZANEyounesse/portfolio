export interface ButtonProps{
    type?: string;
    containerStyles?:string;
    children: React.ReactNode;
}

export interface CustumSpanProps{
    isHash?:boolean
    content:string;
    isSelected?:boolean
}