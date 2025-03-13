import React from 'react'
import { BsCloudCheck } from 'react-icons/bs';
const DocumentInput = () => {
  return (
    <div className="flex items-center gap-1 justify-center">
      <span className='text-base px-1.5 cursor-pointer truncate'>Untitled Documents</span>
      <BsCloudCheck/>
    </div>
  )
}

export default DocumentInput