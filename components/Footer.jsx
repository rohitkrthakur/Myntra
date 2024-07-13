import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h4 className="text-lg font-bold mb-4">LINE SHOPPING</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h4 className="text-lg font-bold mb-4">USEFUL LINKS</h4>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h4 className="text-lg font-bold mb-4">CUSTOMER POLICIES</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h4 className="text-lg font-bold mb-4">EXPERIENCE MYNTRA APP ON MOBILE</h4>
          {/* Add app store badges or download links here */}
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">KEEP IN TOUCH</p>
        <div className="flex justify-center space-x-4 mt-2 text-2xl">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
        <p className="text-sm mt-4">100% ORIGINAL guarantee for all products at myntra.com</p>
        <p className="text-sm">Return within 14 days of receiving your order</p>
      </div>
    </footer>
  );
}

export default Footer;
