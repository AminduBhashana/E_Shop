import React from "react";
import image from "../../assets/image1.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-6 font-medium text-gray-900">
            Discover Your Ultimate
            <br className="hidden lg:inline-block" />
            Shopping Experience
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Elevate your shopping journey with our cutting-edge e-commerce
            platform, where you'll find an extensive collection of premium
            products, seamless navigation, and a secure checkout process.
            Experience shopping like never before.
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
