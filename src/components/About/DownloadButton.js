import React from 'react';
import { saveAs } from 'file-saver';
const DownloadButton = () => {
    const handleDownload = (url, filename) => {
        saveAs(url, filename);
    };

    return (
        <div id="DownloadSection">
            <button onClick={() => handleDownload(process.env.PUBLIC_URL + "/Ananya's_Resume.pdf", "Ananya's_Resume.pdf")}>
                Download Resume as PDF
            </button>
            <button onClick={() => handleDownload(process.env.PUBLIC_URL + "/Ananya's_Resume.jpg", "Ananya's_Resume.jpg")}>
                Download Resume as Image
            </button>
        </div>
    );
};

export default DownloadButton;