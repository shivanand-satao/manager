import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Event Management Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;