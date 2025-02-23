import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="text-white">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/offerings" className="text-white">
            Offerings
          </Link>
        </li>
        <li>
          <Link to="/registrations" className="text-white">
            Registrations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
