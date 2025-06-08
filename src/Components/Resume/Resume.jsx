import { AiFillFilePdf } from "react-icons/ai";

const Resume = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-5/6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-bold">Download My Resume</h2>
        <a
          href="../../../public/UkobizabaAimableCV.pdf"
          download="UKOBIZABAAimable.pdf"
          className="flex flex-row items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:bg-blue-900 transition-all duration-200 ease-in-out"
        >
          <AiFillFilePdf /> Download
        </a>
      </div>

      <iframe
        src="../../../public/UkobizabaAimableCV.pdf"
        width="100%"
        height="600px"
        title="AIMABLE UKOBIZABA CV"
      ></iframe>
    </div>
  );
};

export default Resume;
