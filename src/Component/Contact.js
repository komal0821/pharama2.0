import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('english'); // Default language is English

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the form submission logic (e.g., sending data to a server)

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      feedback: '',
    });

    // Show a pop-up message
    window.alert('Your response is saved.');
  };

  const getLanguageSpecificContent = (key) => {
    const languageData = {
      english: {
        name: 'Name',
        email: 'Email',
        feedback: 'Feedback',
        submit: 'Submit',
      },
      hindi: {
        name: 'नाम',
        email: 'ईमेल',
        feedback: 'प्रतिक्रिया',
        submit: 'सबमिट करें',
      },
      tamil: {
        name: 'பெயர்',
        email: 'மின்னஞ்சல்',
        feedback: 'கருத்து',
        submit: 'சமர்பிக்கவும்',
      },
    };

    return languageData[selectedLanguage][key];
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('hindi')}>Hindi</button>
        <button onClick={() => handleLanguageChange('tamil')}>Tamil</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{getLanguageSpecificContent('name')}:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={getLanguageSpecificContent('name')}
          required
        />

        <label htmlFor="email">{getLanguageSpecificContent('email')}:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={getLanguageSpecificContent('email')}
          required
        />

        <label htmlFor="feedback">{getLanguageSpecificContent('feedback')}:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder={getLanguageSpecificContent('feedback')}
          required
        />

        <button type="submit">{getLanguageSpecificContent('submit')}</button>
      </form>
    </div>
  );
};

export default Contact;
