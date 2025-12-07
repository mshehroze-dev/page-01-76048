import React from "react";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
