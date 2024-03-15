import React from 'react';
import { FaFileAlt } from 'react-icons/fa';


function Resume() {
  const resumeUrl = "../pdf/Sandeep Resume.pdf"; 

  const downloadResume = () => {
    const baseUrl = window.location.origin; // Get the base URL of your application
    const resumeUrl = `${baseUrl}/${resumeFilename}`; // Concatenate the base URL with the filename
    window.open(resumeUrl, '_blank'); // Open the URL in a new tab
  };

  return (
    <div>
      <a href={resumeUrl} onClick={downloadResume} download="Sandeep Resume.pdf">
        <FaFileAlt />
      </a>
    </div>
  );
}

export default Resume;
