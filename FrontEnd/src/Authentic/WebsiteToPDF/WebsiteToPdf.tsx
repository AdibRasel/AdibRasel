// WebsiteToPdf.tsx
import React, { useState } from 'react';
import { toPDF } from './pdfConverter';

const WebsiteToPdf: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [pdfUrl, setPdfUrl] = useState<string>('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const convertToPdf = async () => {
    try {
      const pdf = await toPDF(url);
      setPdfUrl(pdf);
    } catch (error) {
      console.error('Error converting to PDF:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={handleUrlChange}
        placeholder="Enter website URL"
      />
      <button onClick={convertToPdf}>Convert to PDF</button>
      {pdfUrl && (
        <div>
          <p>PDF generated!</p>
          <a href={pdfUrl} download="website.pdf">
            Download PDF
          </a>
          <iframe src={pdfUrl} title="Converted PDF" width="100%" height="600px" />
        </div>
      )}
    </div>
  );
}

export default WebsiteToPdf;
