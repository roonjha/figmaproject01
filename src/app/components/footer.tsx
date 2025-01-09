import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaCcVisa,
  FaCcPaypal,
  FaGooglePay,
  FaCcMastercard,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 mt-10">
      {/* White Background Section */}
      <div className="relative bg-white pb-28">
        {/* Newsletter Section */}
        <div className="absolute w-[80%] bg-black text-white rounded-3xl left-1/2 transform -translate-x-1/2 -bottom-16 py-3 px-1 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <h2 className="flex text-3xl ml-3 font-extrabold mb-5">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>

            <div className="flex mr-5 flex-col gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email add
                ress"
                className="p-3 rounded-md text-center text-black w-full md:w-64 placeholder:text-gray-500 placeholder:font-medium"
              />
              <button className="bg-white text-black font-bold px-4 py-3 rounded-md w-full md:w-64">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="pt-28 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Shop Info */}
          <div>
            <h3 className="text-lg font-extrabold underline mb-4 text-white">
              SHOP.CO
            </h3>
            <p className="text-sm mb-4 text-white">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white hover:text-gray-400" size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white hover:text-gray-400" size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white hover:text-gray-400" size={24} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterest className="text-white hover:text-gray-400" size={24} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">HELP</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">FAQ</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How-to Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 ml-auto">
            <FaCcVisa size={36} className="text-white hover:text-gray-400" />
            <FaCcPaypal size={36} className="text-white hover:text-gray-400" />
            <FaGooglePay size={36} className="text-white hover:text-gray-400" />
            <FaCcMastercard size={36} className="text-white hover:text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
