import { AiFillFilePdf } from "react-icons/ai";
import UkobizabaAimableCV from "../../assets/UkobizabaAimableCV.jpg";
import { useState } from "react";

const Resume = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/UkobizabaAimableCV.pdf";
    link.download = "UkobizabaAimableCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="flex flex-col gap-4 items-center w-5/6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg font-bold">Download My Resume</h2>
        <button
          onClick={handleDownload}
          className="flex flex-row items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 active:bg-blue-900 transition-all duration-200 ease-in-out"
        >
          <AiFillFilePdf className="mr-2" /> Download
        </button>
      </div>

      {showMessage && (
        <span className="text-green-600 text-sm font-bold">
          CV download started!!
        </span>
      )}

      <img src={UkobizabaAimableCV} width="100%" height="600px" />
    </div>
  );
};

export default Resume;
