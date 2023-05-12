import React from 'react'

export const Error = ({ children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-2 uppercase font-bold mb-4 rounded-md">
        {children}
  </div>
  )
}
