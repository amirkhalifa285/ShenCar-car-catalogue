import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="flex-1 mb-12 md:mb-0 md:text-left">
          <h1 className="text-3xl font-bold text-blue-600">ShenCarCar</h1>
          <p className="text-lg text-gray-600 mt-2 leading-relaxed">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* About Column */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">About</h4>
            <ul className="mt-3 space-y-3 text-lg">
              <li className="text-gray-600">How it works</li>
              <li className="text-gray-600">Featured</li>
              <li className="text-gray-600">Partnership</li>
              <li className="text-gray-600">Business Relation</li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">Community</h4>
            <ul className="mt-3 space-y-3 text-lg">
              <li className="text-gray-600">Events</li>
              <li className="text-gray-600">Blog</li>
              <li className="text-gray-600">Podcast</li>
              <li className="text-gray-600">Invite a friend</li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">Socials</h4>
            <ul className="mt-3 space-y-3 text-lg">
              <li className="flex items-center gap-3 text-gray-600">
                <FaDiscord /> Discord
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <FaTwitter /> Twitter
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <FaFacebook /> Facebook
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t pt-6 text-gray-600 text-base text-center md:text-left">
        <div className="flex justify-between">
          <p>©2025 ShenCarCar. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Updated Links with Valid Hrefs */}
            <a href="/privacy-policy" className="hover:underline">
              Privacy & Policy
            </a>
            <a href="/terms-and-conditions" className="hover:underline">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
