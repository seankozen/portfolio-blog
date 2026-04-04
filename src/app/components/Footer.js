import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-500 py-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-500">
          &copy; {year} Sean Kozen — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
