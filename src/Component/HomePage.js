import React, { useState, useEffect, useContext } from 'react';
import './HomePage.css';

const textItems = {
    en: [
        {
            text: "Welcome to Our Pharmaceutical Website",
            description: "Explore our products and services for a healthier tomorrow.",
        },
        {
            text: "Patient-Centered Progress",
            description: "We're working to drive innovation, affordability, and access to life-saving prescription drugs in the United States.",
        },
        // Add more text items in English as needed
    ],
    ta: [
        {
            text: "எங்கள் மருந்துகள் மற்றும் சேவைகளுக்கு வரவேற்கின்றோம்",
            description: "உங்கள் உயிரினத்தைக் காக்கும் முக்கிய மருந்துகள் மற்றும் சேவைகளை படித்தவரை அரசியலுக்கு எழுதுகின்றோம்.",
        },
        {
            text: "பேய் மையத்திற்கு புதியது",
            description: "நாம் கையெழுதும், மிகுந்த மருந்துகளை மிகுந்த விலைக்கு மற்றும் அணுகலுக்கு உழைப்பதில் வேலை செய்கிறோம்.",
        },
        // Add more text items in Tamil as needed
    ],
    hi: [
        {
            text: "हमारी फार्मास्यूटिकल वेबसाइट में आपका स्वागत है",
            description: "एक स्वस्थ भविष्य के लिए हमारे उत्पादों और सेवाओं की जाँच करें।",
        },
        {
            text: "रोगी-केंद्रित प्रगति",
            description: "हम संयुक्त राज्य अमेरिका में जीवन बचाने वाले पर्चे दवाओं की नईतमता, कीमत, और पहुँच को बढ़ावा देने के लिए काम कर रहे हैं।",
        },
        // Add more text items in Hindi as needed
    ],
};

const LanguageContext = React.createContext();

const HomePage = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textItems[language].length);
        }, 5000);

        return () => {
            clearInterval(textInterval);
        };
    }, [language]);

    return (
        <div>
            <LanguageContext.Provider value={{ language, setLanguage }}>
                <header>
                    <LanguageSelector />
                    {/* ... Header content */}
                </header>

                <section className="collage">
                    <div className="text-container">
                        <h1 className="animate-fade-in">{textItems[language][currentTextIndex].text}</h1>
                        <p className="animate-slide-up">{textItems[language][currentTextIndex].description}</p>
                    </div>
                </section>

                <section className="slideshow">
                    {/* ... Slideshow section content */}
                </section>

                <section className="about-us">
                    {/* ... About Us section content */}
                </section>

                {/* Additional content sections */}
            </LanguageContext.Provider>
        </div>
    );
};

const LanguageSelector = () => {
    const { setLanguage } = useContext(LanguageContext);

    const changeLanguage = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="language-selector">
            <label htmlFor="language-select">Select Language:</label>
            <select id="language-select" onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="ta">தமிழ்</option>
                <option value="hi">हिन्दी</option>
            </select>
        </div>
    );
};

export default HomePage;
