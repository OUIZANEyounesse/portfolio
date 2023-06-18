import { ButtonProps } from '@/types'
import React from 'react'
import Image from "next/image"

const Button = ({title, isDisabled, btnType, containerStyles, handleClick, textStyles,children}:ButtonProps) => {
  return (
    <button 
        disabled = {isDisabled}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}

    >
        <span className={`flex ${textStyles}`}>
            {title}
        </span>
        {children && (
          <span className="flex w-6 h-6 items-center">
            {children}
          </span>
        )}
    </button>
  )
}

export default Button
