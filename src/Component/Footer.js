import React from 'react';
import './Footer.css'; // You can create a CSS file for your footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
               
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@pharmaco.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Pharma Co. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
