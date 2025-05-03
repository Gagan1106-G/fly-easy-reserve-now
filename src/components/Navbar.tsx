
import React from "react";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Plane className="h-8 w-8 text-sky-500" />
              <span className="ml-2 text-xl font-semibold text-gray-900">FlyEasy</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-500 hover:text-gray-900 hover:border-sky-500 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Home
              </Link>
              <Link
                to="/book"
                className="border-transparent text-gray-500 hover:text-gray-900 hover:border-sky-500 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Book Flight
              </Link>
              <Link
                to="/manage"
                className="border-transparent text-gray-500 hover:text-gray-900 hover:border-sky-500 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Manage Tickets
              </Link>
              <Link
                to="/data"
                className="border-transparent text-gray-500 hover:text-gray-900 hover:border-sky-500 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              >
                Flight Data
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent font-medium"
          >
            Home
          </Link>
          <Link
            to="/book"
            className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent font-medium"
          >
            Book Flight
          </Link>
          <Link
            to="/manage"
            className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent font-medium"
          >
            Manage Tickets
          </Link>
          <Link
            to="/data"
            className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent font-medium"
          >
            Flight Data
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
