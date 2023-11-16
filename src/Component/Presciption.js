import React, { useState } from 'react';
import './Presciption.css';

const translations = {
  en: {
    title: 'Already consulted a Doctor? Upload your Prescription',
    fileName: 'File Name:',
    fileSize: 'File Size:',
    submitButton: 'Submit Prescription',
    successMessage: 'Your submission is done.',
  },
  hi: {
    title: 'क्या आपने पहले से ही डॉक्टर से परामर्श किया है? अपनी पर्ची अपलोड करें',
    fileName: 'फ़ाइल का नाम:',
    fileSize: 'फ़ाइल का आकार:',
    submitButton: 'पर्ची सबमिट करें',
    successMessage: 'आपकी सबमिशन हो गई है।',
  },
  ta: {
    title: 'முன்னேற்றம் செய்து வந்து டாக்டரை பரிசளித்துவிட்டீர்களா? உங்கள் மருத்துவ பத்திரிகையை பதிவேற்றுக',
    fileName: 'கோப்பு பெயர்:',
    fileSize: 'கோப்பு அளவு:',
    submitButton: 'மருத்துவ பத்திரிகை சமர்பிக்கவும்',
    successMessage: 'உங்கள் சமர்பணம் முடிந்தது.',
  },
};

const Prescription = () => {
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPrescriptionFile(file);
  };

  const handleSubmit = () => {
    // Assuming the prescription is successfully submitted
    setIsSubmitted(true);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const translation = translations[selectedLanguage];

  return (
    <div className="prescription-container">
      <h2>Select Language:</h2>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">हिंदी (Hindi)</option>
        <option value="ta">தமிழ் (Tamil)</option>
      </select>
      <h2>{translation.title}</h2>
      <div className="upload-btn-wrapper">
        <button className="btn">Upload a Prescription File</button>
        <input
          type="file"
          name="prescriptionFile"
          id="prescriptionFile"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
      </div>
      {prescriptionFile && (
        <div className="prescription-details">
          <h3>Prescription Preview:</h3>
          <p><strong>{translation.fileName}</strong> {prescriptionFile.name}</p>
          <p><strong>{translation.fileSize}</strong> {Math.round(prescriptionFile.size / 1024)} KB</p>
          {/* You can add more details or display the prescription content here */}
          <button onClick={handleSubmit} className="submit-btn">
            {translation.submitButton}
          </button>
          {isSubmitted && <p className="success-message">{translation.successMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default Prescription;
