import { ButtonProps } from '@/types'
import React from 'react'

const Button = ({children}:ButtonProps) => {
  return (
    <button type='button' className="text-gray-900 cursor-pointer hover:text-white border hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 ">{children}</button>
  )
}

export default Button
