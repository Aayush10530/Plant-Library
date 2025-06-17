import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-primary-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold font-serif">
          Plant Care Library
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-primary-200 transition-colors duration-300">
              Home
            </Link>
          </li>
          {/* Add more navigation links here if needed */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar; 