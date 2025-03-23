import React from 'react'
import { AiFillFilePdf, AiFillFileWord} from "react-icons/ai";
import { BsMarkdown } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-5/6">
      <h2 className="text-lg font-bold">Download My Resume</h2>
      <div className='md:grid grid-cols-2 md:grid-cols-4 w-full gap-2'>
        <a href='../../../public/UkobizabaAimableResumePDF.pdf' download className="flex flex-row mb-2 md:flex-col items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:bg-blue-900 transition duration-200 ease-in-out">
          <AiFillFilePdf /> PDF
        </a>
        <a href='../../../public/UkobizabaAimableResumeWORD.docx'  download className="flex flex-row mb-2 md:flex-col items-center bg-green-500 hover:bg-green-700 active:bg-green-900 transition duration-200 ease-in-out text-white px-4 py-2 rounded-md">
          <AiFillFileWord /> WORD
        </a>
        <a href='../../../public/UkobizabaAimableResumeMD.md' download className="flex flex-row mb-2 md:flex-col items-center bg-gray-500 hover:bg-gray-700 active:bg-gray-900 transition duration-200 ease-in-out text-white px-4 py-2 rounded-md">
          <BsMarkdown /> MD
        </a>
        <a href='../../../public/UkobizabaAimableResumeTEXT.txt' download className="flex flex-row mb-2 md:flex-col items-center bg-gray-900 hover:bg-gray-800 active:bg-gray-500 transition duration-200 ease-in-out text-white px-4 py-2 rounded-md">
          <FaFileAlt /> TXT
        </a>
      </div>
      
    </div>
  )
}

export default Resume
