"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [visible, setVisible] = useState(true);
  const location = usePathname();

  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    const handleUrlChange = () => {
      setActivePath(location);
      console.log(location);
    };

    handleUrlChange();
  }, [activePath]);
  useEffect(() => {
    // Define a threshold width for non-mobile devices
    const thresholdWidth = 768;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    let prevScrollPos = window.pageYOffset;

    // Check if the device is not mobile based on screen width
    if (window.innerWidth > thresholdWidth) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 filter shadow-[0_-5px_25px_rgba(130,130,130)] transform ${
        visible ? "translate-y-0 shadow-white" : "-translate-y-full"
      } bg-neutral-900`}
    >
      <div className="container mx-auto flex justify-between items-center w-4/5 h-[69px]">
        <Link href="/" className="h-full">
          <Image
            alt="max_bezs logo"
            src="/max-bezs-logo-header.png"
            width="64"
            height="64"
          />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex space-x-4 ${
            isSidebarOpen
              ? "fixed top-0 right-0 w-64 h-[calc(100vh+69px)] text-white transition-transform transform translate-x-0 bg-neutral-800"
              : "hidden"
          }`}
        >
          <ul className={` ${isSidebarOpen ? "" : "md:flex md:space-x-12"}`}>
            <li>
              <Link
                href="/"
                className={
                  activePath === "/"
                    ? " text-white font-cfont underline decoration-2"
                    : "text-white font-cfont "
                }
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={
                  activePath === "/blog"
                    ? " text-white font-cfont underline decoration-2"
                    : "text-white font-cfont "
                }
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={
                  activePath === "/services"
                    ? " text-white font-cfont underline decoration-2"
                    : "text-white font-cfont "
                }
              >
                SERVICES
              </Link>
            </li>
          </ul>

          {isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-white md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </nav>
        <Button styles="hidden md:block " href="/contact-us">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
