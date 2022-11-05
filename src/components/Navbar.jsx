import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Get Instant News</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to={"/business"} className="mr-5 hover:text-gray-900">
              business
            </Link>
            <Link to={"/entertainment"} className="mr-5 hover:text-gray-900">
              entertainment
            </Link>
            <Link to={"/environment"} className="mr-5 hover:text-gray-900">
              environment
            </Link>
            <Link to={"/technology"} className="mr-5 hover:text-gray-900">
              technology
            </Link>
            <Link to={"/science"} className="mr-5 hover:text-gray-900">
              science
            </Link>
            <Link to={"/sports"} className="mr-5 hover:text-gray-900">
              sports
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
