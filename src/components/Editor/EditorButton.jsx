import React from 'react'

export const EditorButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded hover:bg-gray-100 ${isActive ? 'text-blue-500' : ''}`}
  >
    {children}
  </button>
)