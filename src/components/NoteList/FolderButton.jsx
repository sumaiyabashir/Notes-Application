import React from 'react'
import { FaFolder } from 'react-icons/fa'

export const FolderButton = ({ folder, isSelected, onClick }) => (
  <li
    className={`flex items-center p-2 cursor-pointer rounded ${
      isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <FaFolder className="mr-2 text-gray-600" />
    {folder}
  </li>
)