import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 pt-8  text-white bg-[#020617]  ">
      <div className="container px-6 py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl">
          Join 31,000+ other and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-gray-900 bg-black border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Email Address"
          />

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link href="/" className="flex font-ds gap-2">
            <p className="text-3xl font-poppins font-bold">
              <span className="text-blue-500">E</span>
              <span className="text-purple-500">m</span>
              <span className="text-green-500">p</span>
            </p>
            <Image
              src="/assets/icons/logo.svg"
              width={32}
              height={32}
              alt="Evently logo"
              className="overflow-hidden scale-[1.9]"
            />
            <p className="text-3xl font-poppins font-bold text-ijlal-500 ">
              <span className="text-pink-500">w</span>
              <span className="text-yellow-500">e</span>
              <span className="text-red-500">r</span>
            </p>
          </Link>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <Link
                href="/about"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                About
              </Link>
              <Link
                href="/events"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                events
              </Link>
              <Link
                href="/sign-in"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                help
              </Link>
              <Link
                href="/sign-up"
                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;